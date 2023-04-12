// src/app.js
const express = require("express");
const app = express();
require("express-async-errors")

const PORT = 3000;

app.use(express.json());
const path = require("path");

const fs = require("fs").promises;

app.get("/teams", async (req, res, next) => {
  const data = await fs.readFile(path.resolve(__dirname, "./teams.json"));
  const teams = JSON.parse(data);
  return res.status(200).json({ teams });
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  next(error)
});

app.use((error, req, res, next) => {
  return res.status(500).json({ Erro: "Infelizmente deu merda" });
});

app.listen(PORT, () => console.log(`Rodando na portaa: ${PORT}`));
