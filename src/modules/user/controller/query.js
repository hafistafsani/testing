const { User } = require('../../../../database/models')
const wrapper = require('../../../helper/response')

class UserQuery {
    static async createUser (payload, options) {
        try {
            const newData = await User.create(payload, options)
            const result = wrapper.success()

            result.data = newData

            return result
        } catch (error) {
            const result = wrapper.error()

            result.message = 'Failed Create user'
            throw result
        }
    }

    static async readOneUser(options)  {
        try {
            const retrievedUser = await User.findOne(options)
            const result = wrapper.success()

            result.data = retrievedUser

            return result
        } catch (error) {
            const result = wrapper.error()

            result.message = 'Failed Find one user'

            throw result
        }
    }

    static async updateUser(payload, options) {
        try {
            const updatedUser = await User.update(payload, options)
            const result = wrapper.success()

            result.data = updatedUser[0]

            result.message = 'Success Update user'

            return result
        } catch (error) {
            const result = wrapper.error()

            result.message = 'Failed update user'

            throw result
        }
    }

    static async deleteUser(options) {
        try {
            const deletedUser = await User.destroy(options)
            const result = wrapper.success()

            result.message = 'Success delete user'
            result.data = deletedUser
            return result
        
        } catch (error) {
            const result = wrapper.error()

            result.message = 'Failed Delete user'

            throw result
        }
    }
}

module.exports = UserQuery