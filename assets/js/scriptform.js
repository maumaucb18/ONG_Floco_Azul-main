

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'formulario';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db(dbName);

  app.post('/inscricao', (req, res) => {
    const data = req.body;
    db.collection('inscricoes').insertOne(data, (err, result) => {
      if (err) throw err;
      res.send('Inscrição realizada com sucesso!');
    });
  });

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});


const form = document.querySelector('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const endereco = document.getElementById('endereco');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
    endereco: endereco.value
  };
  console.log(data);
  // código para enviar dados para o banco de dados
});