var express = require(“express”);
var bodyParser = require(“body-parser”);
var path = require(“path”);
var friends = require(“./app/data/friends.js”)


var app = express();
var PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extened:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:“application/vnd.api+json”}));

//HTML Routes
app.use(express.static(‘./public’));
app.get(“/”,function(request,response){
        response.sendFile(path.join(__dirname, “index.html”));
    });
app.get(“/survey”,function(request,response){
        response.sendFile(path.join(__dirname, “/public/survey.html”));
    });    

//API Routes
app.get(“/api/friendlist”,function(request,response){
    console.log(friends)
    response.json(friends);
});

app.listen(PORT,function(){
    console.log(“listening on PORT:“, PORT);
});

