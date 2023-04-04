const request = require('supertest');
const { app, server } = require('../app');
const db = require('../db');

describe('/artigos', () => {

    beforeAll(() => {
        db.query('DELETE FROM artigo', (err, res) => {
            if (err) throw err;
        });
    });

    beforeEach(() => {
        let statement = "INSERT INTO artigo (titulo, autor, conteudo, publicacao, categoria) VALUES ?";
        let values = [
            ['Artigo civil 1 resumo', 'Autor 1', 'Conteúdo do artigo 1 loremipsum', '2022-01-01', 'Civil'],
            ['Artigo penal 2 completo', 'Autor 2', 'Conteúdo do artigo 2', '2022-02-01', 'Penal']
        ];
        db.query(statement, [values], (err, res) => {
            if (err) throw err;
        });
    });

    afterEach(() => {
        db.query('DELETE FROM artigo', (err, res) => {
            if (err) throw err;
        });
    });

    afterAll(async () => {
        server.close();
        db.destroy();
    });

    test('Deve retornar artigos ordenados por data de publicação', async () => {
        const response = await request(app).get('/artigos');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(2);
        expect(response.body[0].titulo).toBe("Artigo penal 2 completo");
        expect(response.body[1].titulo).toBe("Artigo civil 1 resumo");
    });

    test('Deve retornar apenas artigos da categoria Civil', async () => {
        const response = await request(app).get('/artigos/categoria/civil');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(1);
        expect(response.body[0].categoria).toBe("Civil");
    });

    test('Deve retornar apenas artigos que tenham o termo "completo" no título', async () => {
        const response = await request(app).get('/artigos/titulo/completo');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(1);
        expect(response.body[0].titulo).toBe("Artigo penal 2 completo");
    });

    test('Deve retornar apenas artigos que tenham o termo "lorem ipsum" no conteúdo', async () => {
        const response = await request(app).get('/artigos/conteudo/loremipsum');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(1);
        expect(response.body[0].titulo).toBe("Artigo civil 1 resumo");
    });

});