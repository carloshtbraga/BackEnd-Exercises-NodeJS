// app.js
const express = require("express");
const validationName = require("./middlewares/validationName");
const validationPrice = require("./middlewares/validationPrice");
const validationDescription = require("./middlewares/validationDescription");
const validationDescriptionValues = require("./middlewares/validationDescriptionValues")
const generateToken = require('./utils/generateToken')

const app = express();

app.use(express.json());

app.post(
  "/activities",
  validationName,
  validationPrice,
  validationDescription,
  validationDescriptionValues,
  (req, res) => {
    return res.status(201).json({ message: "Cadastro efetuado!!!!" });
  }
);

app.post("/signup", (req,res)=> {

})

module.exports = app;
