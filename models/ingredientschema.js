var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/burgers')

var ingredientSchema = mongoose.Schema({
	name: String,
	cost: Number
});

var Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;