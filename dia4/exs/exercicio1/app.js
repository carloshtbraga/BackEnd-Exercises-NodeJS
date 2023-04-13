const express = require("express");
const validationName = require("./middleware/validationName");
const validationPrice = require("./middleware/validationPrice");
const validationDescription = require("./middleware/validationDescription");
const validationDescriptionValues = require("./middleware/validationDescriptionValues")
const validationClient = require('./middlewares/validationClient')
const generateToken = require("./utils/generateToken");
const auth = require("./middlewares/auth")


const token = generateToken();
const app = express();

app.use(express.json());

app.post(
  "/activities",
  auth,
  validationName,
  validationPrice,
  validationDescription,
  validationDescriptionValues,
  (req, res) => {
    return res.status(201).json({ message: "Cadastro efetuado!!!!" });
  }
);

app.post("/signup", validationClient, (req,res)=> {
    return res.status(200).json( {token} );
})

module.exports = app;
