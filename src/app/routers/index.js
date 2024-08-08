const router = require('express').Router()
const userRouter = require('./user')


router.get('/health-check', (req,res) => {
    res.send('Server AMAN')
})

router.use(userRouter)



module.exports = router