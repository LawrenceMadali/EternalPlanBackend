const { isValidObjectId } = require("mongoose")

const validateDbId = (req, res, next) => {
    if (isValidObjectId(req.params.id) == false)
        res.status(400).json({
            error: `given object id (${req.params.id}) is not valid.`
        })
    else
        next()
}

const raiseRecord404Error = (req, res) => {
    res.status(404).json({
        error: 'no record with the given _id: ' + req.params.id
    })
}

const errorHandler = (error, req, res, next) => {
    res.status(500).json({ error })
}
module.exports = {
    validateDbId,
    raiseRecord404Error,
    errorHandler,
}