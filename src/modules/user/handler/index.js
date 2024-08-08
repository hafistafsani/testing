const userController = require('../controller')
const validator = require('../../../helper/validator')
const userValidation = require('./validator')
const wrapper = require('../../../helper/response')

const createUser = async(req,res) => {
    const { body: payload } = req
    let result

    const validatedPayload = validator.validate(payload, userValidation.createNewUser())

    if (validatedPayload.err) {
        result = validatedPayload
    } else {
        result = await userController.createUser(validatedPayload)
    }

    wrapper.sendHttpResponse(res,result)
}

const readOneUser = async (req,res) => {
    const { params } = req
    const validatedPayload = validator.validate(params, userValidation.deleteAndFindOneUser())
    let result

    if (validatedPayload.err) {
        result = validatedPayload
    } else {
        result = await userController.findOneUser(validatedPayload)
    }

    wrapper.sendHttpResponse(res,result)

}

const updateUser = async (req,res) => {
    const { body, params } = req
    const payload = {
        ...body,
        ...params
    }
    const validatedPayload = validator.validate(payload, userValidation.updateUser())
    let result

    if (validatedPayload.err) {
        result = validatedPayload
    } else {
        result = await userController.updateUser(validatedPayload)
    }

    wrapper.sendHttpResponse(res,result)
}

const deleteUser = async (req,res) => {
    const { params } = req
    const validatedPayload = validator.validate(params, userValidation.updateUser())
    let result

    if (validatedPayload.err){
        result = validatedPayload
    } else {
        result = await userController.deleteUser(validatedPayload)
    }

    wrapper.sendHttpResponse(res,result)
}

module.exports = {
    createUser,
    readOneUser,
    updateUser,
    deleteUser
}