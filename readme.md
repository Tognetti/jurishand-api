## Configuração e conexão com o banco de dados

O arquivo `./sql/script.sql` contém o script de criação do banco de dados, tabela, e inserção de algums dados de exemplo.

O arquivo `./.env` é usado pela aplicação feita em Node.js e contém as informações para a conexão com o banco de dados, além da porta em que o servidor será executado. 

## Execução do servidor

Para a instalação das dependências execute `npm install` e em seguida `npm start` para iniciar o servidor.

A API possui 4 endpoints:

| Método  | URI | Descrição |
| ------------- | ------------- | -----------|
| GET  | /artigos  | Retorna artigos ordenados por data de publicação
| GET  | /artigos/categoria/:categoria  | Retorna artigos da categoria especificada |
| GET  | /artigos/titulo/:termo | Retorna artigos que contém o termo especificado em seu título |
| GET  | /artigos/conteudo/:termo  | Retorna artigos que contém o termo especificado em seu conteúdo |

Os testes estão definidos em `./tests/artigos.test.js` e podem ser executados usando o comando `npm test`. **Os testes irão apagar todos os dados presentes no banco.**

## Execução do script em Python

O script pode ser executado com `python3 ./python/script.py` e irá criar 4 relatório em CSV:

| Arquivo  | Descrição |
| ------------- | ------------- |
| artigos.csv  | Todos os artigos  |
| autores.csv  | Quantidade de artigos por autor  |
| categorias.csv  | Quantidade de artigos por categoria |
| media-palavras.csv  | Quantidade de palavras no conteúdo de cada artigo e média total de palavras |

