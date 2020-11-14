let express = require('express');
let router = express.Router();


router.get('/practice', function (req, res)
{
    res.send('Hey!! This is a practice router!')
})

router.get('/about', function (req, res)
{
    res.send('This is the about route')
})

router.get('/house', function (req, res)
{
    res.send('Routes are in the house!!! :^D')
})

module.exports = router
