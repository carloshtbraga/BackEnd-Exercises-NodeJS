import chalk from 'chalk'

const nota = 4;
if (nota>=7){
    console.log(chalk.green('Parabéns =)'));
} else{
    console.log(chalk.bgRed('Reprovado hahahah'));
}