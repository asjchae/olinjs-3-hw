var Ingredient = require('../models/ingredientschema')
				, mongoose = require('mongoose');


exports.new = function(req, res) {
	res.render('ingredientNew',{});
};

exports.create = function(req, res) {
	var ingr = new Ingredient({name: req.body.ingredient, cost: req.body.cost});
	ingr.save(function (err) {
		if (err) {
			console.log("Problem saving ingredient", err);
		} else {
			res.send("Your new ingredient: " + ingr.name + ". Cost: " + ingr.cost + ".");
		}
	})
};