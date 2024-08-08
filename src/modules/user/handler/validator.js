const joi = require('../../../helper/validator').joi()

const createNewUser = () => {
    return joi.object({
        name : joi.string().required(),
        password: joi.string().required(),
        birthDate : joi.date().required(),
        occupation: joi.string().optional().allow('').allow(null)
    })
}

const updateUser = () => {
    return joi.object({
        name : joi.string().optional(),
        birthDate : joi.date().optional(),
        occupation: joi.string().optional().allow('').allow(null),
        id: joi.string().required()
    })
}

const deleteAndFindOneUser = () => {
    return joi.object({
        id: joi.string().required()
    })
}

module.exports = {
    createNewUser,
    updateUser,
    deleteAndFindOneUser
}