const http = require("http");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");

const port=3000;
const server=http.createServer((req,res)=>{
    if(req.url.startsWith("/tasks")){
        tasksRouter(req,res);
    }else{
        res.writeHead(404,{"content-type":"application/json"})
    res.end(JSON.stringify({
        message:"not found"}))
    }});


    server.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    });