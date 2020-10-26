var express = require('express');
var router = express.Router();

//Policy page route
router.get('/', function (req, res){
    res.send('Policy home page');
})

router.post('/', function (req,res){
    res.json({message: 'Policy post response', requestBody:req.body});
});

module.exports = router;