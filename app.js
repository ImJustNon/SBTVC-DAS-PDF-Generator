const express = require("express");
const app = express();

const fs = require("fs");
const config = require("./configs/config.js");
const logger = require("morgan");
const bodyParser = require("body-parser");
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});
const path = require("path");
const expressJson = express.json({
    limit: '50mb',
});


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs'); 
app.use(logger('dev'));
app.use(expressJson);
app.use(urlEncoded);
app.use(express.static(path.join(__dirname,'./public')));
app.use(express.static(path.join(__dirname,'./node_modules')));

fs.readdir(path.join(__dirname + '/routers'), (error, files) =>{
    files.forEach(file =>{
        try{
            const router = require(`./routers/${file}`);
            app.use(router);
            console.log("[Router] Load success : " + file);
        }
        catch(e){
            console.log("[Router] Fail to load : " + file);
        }
    });
});


app.listen(config.app.port, async() => {
    console.log("listening on port " + config.app.port);
});