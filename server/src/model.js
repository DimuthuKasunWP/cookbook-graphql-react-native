import mongoose, { Schema } from 'mongoose';

const ingredientSchema = new Schema({
  name: String,
  amount: Number,
  amountUnit: String,
});

const recipeSchema = new Schema({
  title: String,
  preparationTime: Number,
  servingCount: Number,
  sideDish: String,
  directions: String,
  ingredients: [ingredientSchema]
});

const recipeModel = mongoose.model('recipe', recipeSchema);

export { recipeModel };
