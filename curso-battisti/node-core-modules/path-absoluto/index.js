const path = require('path')

//path absoluto

console.log(path.resolve('test.txt'));

// fazer um path

const midFoler = 'relatorios'
const fileName = 'carlos.txt'
const finalpath = path.join('/', 'aquivos',midFoler, fileName)

console.log(finalpath);