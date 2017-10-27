var path = require("path");


module.exports = function(app){

	app.get("/survey",function(request, response){
 	response.sendFile("./index.html");	
});

app.get("/survey",function(request, response){
 	response.sendFile("./survey.html");	
});
}