const router = require('express').Router();

const Person = require('../models/Person')

//criação de pessoa
router.post('/', async (req, res) => {

    //req .body
    const {name, salary, approved} = req.body

    if (!name) {
        res.status(422).json({error: 'O nome é obrigatório.'})
    }

    const person = {
        name,
        salary,
        approved
    }

    try {
        await Person.create(person)

        res.status(201).json({massage: 'Pessoa inserida no sistema com sucesso.'})

    } catch (error) {
        res.status(500).json({error: error})
    }

})

router.get('/', async (req,res) => {
    try {
        const people = await Person.find();
        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//ler dados - todas as pessoas

module.exports = router;