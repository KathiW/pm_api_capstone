var express = require('express');
var router = express.Router();
var policy_controller = require('../controllers/policyController');

//Policy page route
router.get('/',policy_controller.policy_list_get);

// router.get('/', function (req, res){
//     res.send('Policy home page');
// })


router.post('/', policy_controller.policy_create_post);

//Get policy by ID
router.get("/:id", policy_controller.getById);

router.put("/:id", policy_controller.updateById);

module.exports = router;