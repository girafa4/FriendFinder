var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("./app/data/friends.js");


var app = express();
var PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));


//HTML Routes
// app.use(express.static('./public'));
app.use(express.static(__dirname + '/app/public'));
app.get("/",function(request,response){ 
        response.sendFile(path.join(__dirname, "index.html"));
    });
app.get("/survey",function(request,response) {

        response.sendFile(path.join(__dirname,"app/public/survey.html"));
    }); 
 app.post('/api/newfriend', function(request,response) {
 	 
        console.log('request.body', request.body)
 	 response.send(JSON.stringify({
            name: request.body.name,
            photo: request.body.photo,
            score: request.body.score        
         }));
 
 }); 
 app.get("/api/newfriend",function(request,response) {
    console.log(friends)
    response.json(friends);
}); 

//API Routes
app.get("/api/friendlist",function(request,response) {
    console.log(friends)
    response.json(friends);
});

app.listen(PORT,function(){
	console.log("listening on PORT: ", PORT);
  
});

