const router = require('express').Router();

const Person = require('../models/Person')

//criação de pessoa
router.post('/', async (req, res) => {

    //req .body
    const {name, salary, approved} = req.body

    if (!name) {
        res.status(422).json({error: 'O nome é obrigatório.'})
        return
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

router.get('/:id', async (req, res) => {
    //extrair o dado da requisição = req.rarams
    const id = req.params.id

    try {
        
        const person = await Person.findOne({_id: id})

        if(!person) {
            res.status(422).json({error: 'O usuário não foi encontrado!'})
            return
        }

        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//update - atualização de dados

module.exports = router;