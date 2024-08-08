const wrapper = require('./response')

const joi = require('joi').extend(
    require('@joi/date'),
    (joi) => ({
        type: 'string',
        base: joi.string(),
        coerce: {
            from: 'number', // will convert from number to string if using joi.string()
            method(value) {
                return { value: value.toString() }
            },
        },
    }),
    (joi) => ({
        type: 'date',
        base: joi.date(),
        validate(value, helpers) {
            if (
                helpers.original.search(':') === -1 &&
                (helpers.original.search(' ') === -1 || helpers.original.search('T') === -1)
            ) {
                value = new Date(helpers.original)
                value.setHours(0, 0, 0, 0)
            }

            return { value, helpers }
        },
    }),
)

class Validator {
    static joi() {
        return joi
    }

    static validate(payload, model) {
        const { value: validatedPayload, error } = model.validate(payload)

        if (error) {
            const [detail] = error.details
            const { message } = detail
            const result = wrapper.error()

            result.code = 400
            result.message = message

            return result
        }

        return validatedPayload
    }
}

module.exports = Validator