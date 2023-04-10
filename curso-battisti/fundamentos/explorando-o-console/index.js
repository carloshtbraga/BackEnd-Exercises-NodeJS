// impressao de mais de um valor

const x = 10
const y = 'Carlos'
const z = [1,2,3,4]

console.log(x,y,z);

// contagem

console.count(`O valor de x é ${x}, `)
console.count(`O valor de x é ${x}, `)
console.count(`O valor de x é ${x}, contagem`)
console.count(`O valor de x é ${x}, contagem`)
console.count(`O valor de x é ${x}, contagem`)
console.count(`O valor de x é ${x}, contagem`)

// variavel entre string

console.log('O nome dele é %s', y);

// limpar o console

setTimeout(() =>{
    console.clear();
}, 3000)