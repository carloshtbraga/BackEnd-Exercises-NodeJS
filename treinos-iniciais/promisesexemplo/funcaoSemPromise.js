const { log } = require("console");

function calcularDivisao(num1, num2) {
    if (num2 == 0) throw new Error("Não da pra dividir por zero")
    const resultado = num1 / num2
    return resultado
}

try {
    const resultado = calcularDivisao(4, 0);
    console.log("Resultado:", resultado);
} catch (e) {
    console.log("Erro:", e.message);
}
