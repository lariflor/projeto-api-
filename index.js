const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let usuarios = [];

// GET /usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// POST /usuarios
app.post('/usuarios', (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e email são obrigatórios.' });
  }

  const novoUsuario = { id: usuarios.length + 1, nome, email };
  usuarios.push(novoUsuario);

  res.status(201).json(novoUsuario);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
