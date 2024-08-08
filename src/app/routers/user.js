const router = require('express').Router()
const userHandler = require('../../modules/user/handler')


router.post('/api/v1/user', userHandler.createUser)
router.get('/api/v1/user/:id', userHandler.readOneUser)
router.put('/api/v1/user/:id', userHandler.updateUser)
router.delete('/api/v1/user/:id', userHandler.deleteUser)

module.exports = router