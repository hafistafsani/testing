const router = require('express').Router()


router.get('/health-check', (req,res) => {
    res.send('Server AMAN')
})


module.exports = router