const express = require("express");
const {PORT}=require('./config/serverConfig.js')
const bodyParser=require('body-parser');


const setUpAndStartServer=async ()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log(`the server run on port ${PORT} `)
    })
}
setUpAndStartServer();