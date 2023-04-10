const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual a sua cor favorita? ", (cor) => {
  if (cor === "azul") {
    console.log("Azul é cor de biba");
  } else {
    console.log(`A minha cor favorita é ${cor}`);
  }
  readline.close();
});
