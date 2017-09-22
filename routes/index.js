var express = require('express');
var router = express.Router();
var GitHubApi = require("github");
var mongodb = require('mongodb').MongoClient;
var db;
var url= "mongodb://hector:passWebDevUniandes@ds139675.mlab.com:39675/github_search";

openMongo();


function openMongo(){
	mongodb.connect(url, (err, dbs) =>{
		if(err) 
		{
			throw err;
		}
		db = dbs;
	});
}

function historial(usuario,data){
	var collection = db.collection("historial");
	data = data.data;
	collection.insert({
		"usuario":usuario,
		data
	});
}

router.get("/historial", function(req, res){
	var collection = db.collection("historial");
	collection.find().toArray(function(err, estado){
		if(err) throw err;
		res.json(estado);
	});
});


router.get('/getFollowers/:user', function(req, res) {
	var usuario = req.params.user;
	usuario = usuario.substr(1);
	console.log(usuario);
	var github = new GitHubApi({});

	github.users.getFollowingForUser({
		username: usuario
	}, function(err, data) {
		if(data===undefined)
			res.json(err);
		else{
			historial(usuario, data);
			res.json(data);
		}
	});
});


module.exports = router;
