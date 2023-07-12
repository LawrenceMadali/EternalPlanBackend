const express = require('express')
const router = express.Router()
// const ObjectId = require('mongoose').Types.Objectld
const { isValidObjectId } = require('mongoose')

const Eternalplans = require('../models/eternalplans.model')
const { generateCrudMethods } = require('../services')
const eternalplansCrud = generateCrudMethods(Eternalplans)
const { validateDbId, raiseRecord404Error, errorHandler } = require('../middleware')


router.get('/', (req, res, next) => {
    eternalplansCrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err))
})
// get
router.get('/:id', validateDbId, (req, res, next) => {
    eternalplansCrud.getById(req.params.id)
        .then(data => {
            if (data)
                res.send(data)
            else
                raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})
// create
router.post('/', (req, res, next) => {
    const newRecord = {
        fullname: req.body.fullname,
        address: req.body.address,
        birthday: req.body.birthday,
        gender: req.body.gender,
        civil_status: req.body.civil_status,
        contact_number: req.body.contact_number,
        email_address: req.body.email_address,
        product: req.body.product,
        price: req.body.price,
    }
    eternalplansCrud.create(newRecord)
        .then(data => res.status(201).json(data))
        .catch(err => next(err))
})
// update
router.put('/:id', validateDbId, (req, res, next) => {
    const updatedRecord = {
        fullname: req.body.fullname,
        address: req.body.address,
        birthday: req.body.birthday,
        gender: req.body.gender,
        civil_status: req.body.civil_status,
        contact_number: req.body.contact_number,
        email_address: req.body.email_address,
        product: req.body.product,
        price: req.body.price,
    }
    eternalplansCrud.update(req.params.id, updatedRecord)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})
// delete
router.delete('/:id', validateDbId, (req, res, next) => {
    eternalplansCrud.delete(req.params.id)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

// router.delete('/:id', validateDbId, (req, res) => { })

module.exports = router