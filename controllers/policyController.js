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

    exports.policy_list_get = function(req,res){
        Policy.find()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).send('Error when retrieving policies');
        });

    }

    exports.getById = (req,res) => {
        const id = req.params.id;
        console.log(`>>>GET the policy information for ${id}...`);
        if (id != null && id != ''){
            Policy
            .findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({Message: `No Policy Data found with ID: ${id}.`});
                }
                else {
                    res.status(200).json(data);
                }            
        })
        .catch(error => {res.status(400).send({ErrorMessage: error.message});
        });
    }
    };

    exports.updateById = (req,res) => {
        const id = req.params.id;
       // console.log(`>>>GET the policy information for ${id}...`);
        if (id != null && id != ''){
            Policy
            .findOneAndUpdate(id, req.body, {new:true})
            .then(data => {
                if(!data){
                    res.status(404).send({Message: `No Policy Data found with ID: ${id}.`});
                }
                else {
                    res.status(200).json(data);
                }            
        })
        .catch(error => {res.status(400).send({ErrorMessage: error.message});
        });
    }
    };

    exports.deleteById = (req,res) => {
        const id = req.params.id;
       // console.log(`>>>GET the policy information for ${id}...`);
      // if (id != null && id != ''){
            Policy.findByIdAndDelete(id)
            .then(data => {
                if(!data){
                    res.status(404).send({Message: `No Policy Data found with ID: ${id}.`});
                }
                else {
                    res.status(200).send(`${id} Policy deleted`);
                                }            
        })
        .catch(error => {res.status(400).send({ErrorMessage: error.message});
        });
    };

    exports.deleteAll = (req,res) => {
        //const id = req.params.id;
       // console.log(`>>>GET the policy information for ${id}...`);
      // if (id != null && id != ''){
            Policy.deleteMany()
            .then(data => {
                res.status(200).json(data);
                })
            .catch(error => {
                res.status(400).send({ErrorMessage: error.message});
        });
    };
