var Policy = require('../models/policy');

exports.policy_create_post = function(req,res) {
    if (!req.body.name) {
        res.status(400).send('You must have a name field to enter');
    }
    const policy = new Policy(req.body);

    policy.save()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).send('There was an issue while trying to save the Policy');
    });

    };
