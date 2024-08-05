const wrapper = require('../../../helper/response')
const query = require('./query')


class UserController {
    static async createUser(payload) {
        try {
            const newUser = await query.createUser(payload)

            const { data } = newUser

            const result = wrapper.success()
            result.code = 201
            result.data = {
                name : data.dataValues.name,
                occupation : data.dataValues.occupation
            }

            result.message = 'Success create new user'

            return result
        } catch (error) {
            return error
        }
    }

    static async findOneUser(payload) {
        try {
            const { id } = payload
            const queryOptions = {
                where : {
                    id 
                }
            }

            const retrievedUser = await query.readOneUser(queryOptions)

            return retrievedUser
        } catch (error) {
            return error
        }
    }

    static async updateUser(payload) {
        try {
            const { id } = payload
            const queryOptions = {
                where: {
                    id
                }
            }

            Reflect.deleteProperty(payload, id)

            const updateUser = await query.updateUser(payload, queryOptions)

            return updateUser

        } catch (error) {
            return error
        }
    }

    static async deleteUser(payload) {
        try {
            const { id } = payload
            const queryOptions = {
                where: {
                    id
                }
            }

            const deletedUser = await query.deleteUser(queryOptions)

            return deletedUser
        } catch (error) {
            return error
        }
    }
}


module.exports = UserController