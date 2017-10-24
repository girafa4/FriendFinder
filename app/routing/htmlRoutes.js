var path = require(“path”);

// module.exports = function(app) {
//     // app.use(express.static(‘public’));
    
//     app.get(“/survey”,function(request,response){
//         response.sendFile(path.join(__dirname, “/../public/survey.html”));
//     });    
//     app.get(“*”,function(request,response){
//         response.sendFile(path.join(__dirname, “/../public/index.html”));
//     });
// };

var htmlRoutes = function(app) {
    // app.use(express.static(‘public’));
    
    app.get(“/survey”,function(request,response){
        response.sendFile(path.join(__dirname, “/public/survey.html”));
    });    
    app.get(“*”,function(request,response){
        response.sendFile(path.join(__dirname, “/../public/index.html”));
    });
};

module.exports = htmlRoutes;