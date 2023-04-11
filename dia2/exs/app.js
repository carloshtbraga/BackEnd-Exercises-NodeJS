const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, "./movies.json");

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    console.log(data);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido/encontrado: ${error}`);
  }
};

app.get("/movies/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const movies = await readFile();
    const movie = movies.find((m) => m.id === id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get("/movies", async (req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/movies", async (req, res) => {
  const id = Number(req.params.id);
  const { movie, price } = req.body;
  if (!movie || !price) {
    return console.log("Esqueceu o filme ou o preço");
  } else
  try {
    const movies = await readFile();
    const lastMovieId = movies[movies.length - 1].id;
    const newMovie = { id: lastMovieId + 1, movie, price };
    const allMovies = JSON.stringify([...movies, newMovie])
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;
