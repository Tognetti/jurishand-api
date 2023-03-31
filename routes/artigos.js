
const express = require('express')
const router = express.Router();
const db = require("../db.js");

router.get('/artigos', (req, res) => {
    db.query('SELECT * FROM artigo ORDER BY publicacao DESC', (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

router.get('/artigos/categoria/:categoria', (req, res) => {
    const categoria = req.params.categoria;
    db.query(`SELECT * FROM artigo WHERE categoria = '${categoria}'`, (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

router.get('/artigos/titulo/:termo', (req, res) => {
    const termo = req.params.termo;
    db.query(`SELECT * FROM artigo WHERE titulo LIKE '%${termo}%'`, (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

router.get('/artigos/conteudo/:termo', (req, res) => {
    const termo = req.params.termo;
    db.query(`SELECT * FROM artigo WHERE conteudo LIKE '%${termo}%'`, (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

module.exports = router;