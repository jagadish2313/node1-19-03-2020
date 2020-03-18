var express = require('express');
var naem1 = require('./test1')
var app = express();

var port = process.env.PORT || 3000;
app.use('/hello' , (req,res)=> {
    res.send(naem1)
})

app.listen(port, ()=> {console.log("server is up and running again")})