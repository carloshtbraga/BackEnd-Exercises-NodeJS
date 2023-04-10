const fs = require("fs");

fs.unlink("arquivo.txt", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Arquivo removido");
});
