const app = require('./app');
const connection = require('./db/connection');

const PORT = 3002;

app.listen(PORT, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);

//   O código abaixo é para testarmos a comunicação com o MySQL
  const [result] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  }
  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);
});