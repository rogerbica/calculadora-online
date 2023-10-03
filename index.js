const express = require('express');

const app = express();

app.get('/somar', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const soma = num1 + num2;

    res.send(soma.toString());
});

app.get('/subtrair', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const subtracao = num1 - num2;

    res.send(subtracao.toString());
});

app.get('/multiplicar', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const multiplicacao = num1 * num2;

    res.send(multiplicacao.toString());
});

app.get('/dividir', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const divisao = num1 / num2;

    res.send(divisao.toString());
});

app.listen(3000);