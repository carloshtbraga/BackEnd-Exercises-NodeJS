const validationDescriptionValues = (req, res, next) => {
  const { description :{ rating, createdAt, difficulty}} = req.body;
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return res
      .status(400)
      .json( { message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
  }
  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  // Após usar o regex para validação de data eu vou agora usar o .test para ativar ele
  if (!isFormatDate.test(createdAt)) {
    return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
  }
  const classifications = ['Fácil', 'Médio', 'Difícil'];
  if (!classifications.includes(difficulty) ) {

    return res
      .status(400)
      .json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  }
  next();
};
module.exports = validationDescriptionValues;
