// src/experimento-json.js

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use('/static', express.static('./src/images/brasao'));
app.use(morgan('combined'));
app.use(cors());

app.post('/fail', (req, res) => {
  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` });
});


app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` });
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });

app.use((req, _res, next) => {
    console.log('req.method:', req.method);
    console.log('req.path:', req.path);
    console.log('req.params:', req.params);
    console.log('req.query:', req.query);
    console.log('req.headers:', req.headers);
    console.log('req.body:', req.body);
    next();
  });