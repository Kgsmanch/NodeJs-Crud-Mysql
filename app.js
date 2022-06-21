const express = require ('express');
const app = express ();
const User = require ('./models/User');
const Produtos = require ('./models/Produtos');

app.get("/", async (req, res) => {
    res.send ("Pagina inicial sendo testada!!!");
});

app.listen (8080, () => {
    console.log ('Servidor conectado a porta 8080');
});
