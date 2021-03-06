var Ingredient = require('../models/ingredientschema')
, Order = require('../models/orderschema')
, mongoose = require('mongoose');

exports.new = function(req, res) {
	var ingredientlist = Ingredient.find({}).exec(function (err, response) {
		if (err) {
			return console.log("error", err);
		}
		res.render('ingredientlist', {ingredientlist: response});
	});
};

exports.create = function(req, res) {
	var newOrder = new Order({customer: req.body.customer, ingredients: req.body.ingredients});
	console.log(req.body.ingredients);
	newOrder.save(function (err){
		if (err) {
			return console.log("Couldn't save your new order");
		}
		// redirect to list of orders
		res.redirect('/order/new');
	});
}

exports.orders = function(req, res) {
	var orderlist = Order.find({}).populate('ingredients').exec(function (err, response) {
		if (err) {
			return console.log("error", err);
		}
		res.render('orderlist', {orderlist: response})
	});
};

exports.delete = function(req, res) {
	var orders = Order.findOneAndRemove({value: req.body.id}).exec(function (err, response) {
		if (err) {
			return console.log("error", err);
		}
		res.redirect('/orders')
	})
}
