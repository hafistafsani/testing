const sendHttpResponse = (res, result = { err: true, code : 500, data : null, meta : null , message : 'Internal Server Error' }) => {
    const { err, code, data, meta, message } = result

    res.status(code).send({
        err,
        code,
        data,
        meta,
        message,
    })
}

const error = () => {
    const response = {
        err: true,
        code: 500,
        data: null,
        meta: null,
        errMessage: null,
        message: '',
    }

    return response
}

const success = () => {
    const response = {
        err: false,
        code: 200,
        data: null,
        meta: null,
        message: '',
    }

    return response
}

const wrapper = {
    sendHttpResponse,
    error,
    success,
}

module.exports = wrapper
