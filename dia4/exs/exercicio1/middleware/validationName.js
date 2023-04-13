const validationName = (req, res, next) => {
    const { name } = req.body;
    if(!name){return res.status(400).json({ message: "Name obrigatório" })}
    if(name.length < 4){return res.status(400).json({ message: "Name deve ter 4 letras" })}
    next()
  };

module.exports = validationName