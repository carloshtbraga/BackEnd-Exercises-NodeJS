import chalk from 'chalk'

const nota = 9;
if (nota>=7){
    console.log(chalk.green.bgWhite('Parabéns =)'));
} else{
    console.log(chalk.bgRed('Reprovado hahahah'));
}