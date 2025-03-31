require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Configuração do CORS (para permitir chamadas do frontend)
app.use(cors());

// Middleware para validar o token de acesso
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token || token !== `Bearer ${process.env.ACCESS_TOKEN}`) {
    return res.status(403).json({ error: "Acesso negado!" });
  }
  next();
};

// Rota segura para obter a chave da API
app.get("/get-key", verifyToken, (req, res) => {
  res.json({ apiKey: process.env.EMAILJS_PUBLIC_KEY });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
