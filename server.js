const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var policyRouter = require('./routes/policyRouter');

const app = express();

//parse HTTP requests with content-type = application/json
app.use(bodyParser.json());

// parse HTTP request with content-type = application/x-www-form-urnencded
app.use(bodyParser.urlencoded({extended: true}));

//top-level route
app.get("/", (req, res) => {
    res.json({message: "Policy Management API"});
});

app.use('/api/policies', policyRouter);
app.use('/api/claims', claimsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});
