function calcularDivisao(num1, num2) {
    const promise = new Promise((resolve, reject) => {
        if(num2 == 0) reject( new Error('Po, zero não rola!!!!!'))
        const resultado = num1 / num2
        resolve(resultado)
    })
    return promise;
}

calcularDivisao(300,0)
    .then((result) => console.log(result))
    .catch((e)=> console.log(e.message));