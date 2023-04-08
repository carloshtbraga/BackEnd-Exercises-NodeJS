const { getSystemErrorName } = require("util");

const fs = require("fs").promises;

async function readAll() {
  const fileContent = await fs.readFile("./simpsons.json", "utf-8");
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) =>
    console.log(`${id} - Nome: ${name}`)
  );
}

async function getSimpsonById(id) {
  const fileContent = await fs.readFile("./simpsons.json", "utf-8");
  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((s) => Number(s.id) === id);
  if (!chosenSimpson) {
    throw new Error("Id não encontrada");
  }
  return console.log(chosenSimpson);
}

async function filterSimpsons() {
  const fileContent = await fs.readFile("./simpsons.json", "utf-8");
  const simpsons = JSON.parse(fileContent);
  const filteredSimpson = simpsons.filter((s) => s.id !== "10" && s.id !== "6");
  await fs.writeFile("./simpsons.json", JSON.stringify(filteredSimpson));
}

async function createSimpsonsFamily() {
  const fileContent = await fs.readFile("./simpsons.json", "utf-8");
  const simpsons = JSON.parse(fileContent);
  const familyIds = [1, 2, 3, 4,];

  const simpsonsFamily = simpsons.filter((s) => familyIds.includes(Number(s.id)))
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))
  
  console.log(simpsonsFamily);
}

async function addNelsonToFamily(){
  const fileContent = await fs.readFile("./simpsonsFamily.json", "utf-8");
  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({id:'8', name: 'Nelson Muntz'})
  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(simpsonsFamily))

}

async function replaceNelsonForMaggie(){
  const fileContent = await fs.readFile("./simpsonsFamily.json", "utf-8");
  const simpsonsFamily = JSON.parse(fileContent);
  const familyWtihoutNelson = simpsonsFamily.filter((s) => s.id !== '8')
  familyWtihoutNelson.push({id:'15', name: 'Maggie Simpson'})
  //ou
  //familyWtihoutNelson.concat({id:'15', name: 'Maggie Simpson'})
  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(familyWtihoutNelson))
}
// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
async function main() {
  // await filterSimpsons();
  // await readAll();
  // await getSimpsonById(9)
  // addNelsonToFamily()
  // createSimpsonsFamily()
  // replaceNelsonForMaggie()
}

main();
