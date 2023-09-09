const express = require("express");
const {PORT}=require('./config/serverConfig.js')


const setUpAndStartServer=async ()=>{
    const app=express();
    app.listen(PORT,()=>{
        console.log(`the server run on port ${PORT} `)
    })
}
setUpAndStartServer();