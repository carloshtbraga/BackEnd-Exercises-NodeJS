const readline = require("readline-sync");

function imcCalc(height, weight) {
  console.log(`Peso ${weight} e Altura ${height}`);
  const heighMeters = height / 100;
  const squaredHeight = heighMeters ** 2;
  const imc = weight / squaredHeight;
  return imc;
}

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  "Normal Weight": {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  "Obese Class I": {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  "Obese Class II": {
    minBMI: 35,
    maxBMI: 39.9,
  },
  "Obese Class III": {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

function main() {
  const weightKg = readline.questionFloat("Qual o seu peso em KG brother?");
  const heightCM = readline.questionFloat("Qual a sua altura em CM fio?");

  const imc = imcCalc(heightCM, weightKg);
  const situacao = handleBMIResult(imc)

  console.log(`Seu IMC é ${imc.toFixed(2)}`);
  console.log(`Situação: ${situacao}`);
}

main();
