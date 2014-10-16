var express=require('express');
var Podio = require("podio-api");
var podio = new Podio({ client_id: "elasticio", client_secret: "LFV9OQwCJ7lI1Y4jLp062UGSwFeKOkaizL8ssNqqM3tTvcsf7jztQpB9fnrW0MGp" });

var app=express();
app.listen(8000);


app.get('/data',function(request,response){
	console.log('request received');
	response.send('hello');
	podio.authenticate({ username:"ssamv@techego.com", password: "supply321" }, function(err, result) {
    if (err) return console.error (err);
    console.log (result.auth);
	
	var options = {
    auth:result.auth,
    app_id: 9677383
};

podio.itemsAddNewItem(options, function (err, result) {
    if (err) return console.error(err);
    console.log(result);
});
	
});
});