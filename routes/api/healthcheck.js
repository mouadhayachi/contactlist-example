const app = require("express").Router();

app.get("/",(req,res)=> {
    res.status(200).send({msg:"Server is working"})
})

module.exports = app;