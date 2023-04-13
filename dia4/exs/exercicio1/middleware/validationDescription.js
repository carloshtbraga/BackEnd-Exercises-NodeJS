const validationDescription = (req, res, next) => {
    const { description } = req.body;
    if(!description){return res.status(400).json({ message: "O campo description é obrigatório" })}
    const { description: {createdAt, rating, difficulty} } = req.body;
    if(!createdAt){return res.status(400).json({ message: "O campo createdAt é obrigatório" })}
    if(!rating){return res.status(400).json({ message: "O campo rating é obrigatório" })}  
    if(!difficulty){return res.status(400).json({ message: "O campo difficulty é obrigatório" })}
    next()
}
module.exports = validationDescription;