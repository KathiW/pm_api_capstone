var Policy = require('../models/policy');

const anActualPolicy = new Policy({
    name: "Kathi Ward",
    type: "Property",
    holder_first_name: "Kathi",
    holder_last_name: "Ward",
    holder_account_id: "KW122345",
    is_active: true,
    has_active_claim: true,
    effective_date: "2020-01-01",
    termination_date: null
});

exports.policy_create_post = function(req,res) {
    res.json(anActualPolicy);
};