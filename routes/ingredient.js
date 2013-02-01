var Ingredient = require('../models/ingredientschema')
				, mongoose = require('mongoose');


exports.new = function(req, res) {
	console.log("hey thar");
	res.render('ingredientNew',{});
};

exports.create = function(req, res) {
	var ingr = new Ingredient({name: req.body.ingredient, cost: req.body.cost});
	ingr.save(function (err) {
		if (err) {
			console.log("Problem saving ingredient", err);
		} else {
			console.log(ingr.name, ingr.cost);
			res.send("Your new ingredient: " + ingr.name + ". Cost: " + ingr.cost + ".");
		}
	})
};