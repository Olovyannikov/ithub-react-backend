const express = require('express');

const router = express.Router();

router.get('/send', (req, res) =>{
    return res.json({
        message: 'Method not allowed',
    }, {status: 405});
})

router.post('/send', (req, res) => {
    return res.json({status: 'OK', message: 'request processed', req: req.json()})
})


module.exports = router;