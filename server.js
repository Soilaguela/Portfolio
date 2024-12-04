const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rota para o seu formulário de contato
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Mensagem recebida de ${name} (${email}): ${message}`);
  res.status(200).send("Mensagem recebida com sucesso!");
});

// Inicializar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
