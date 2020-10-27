var express = require('express');
var router = express.Router();
var policy_controller = require('../controllers/policyController');

//Policy page route
router.get('/', function (req, res){
    res.send('Policy home page');
})


router.post('/', policy_controller.policy_create_post);

module.exports = router;