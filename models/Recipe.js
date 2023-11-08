const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  serving: { type: String, required: true },
  method: { type: String, required: true },
  imgage: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  ingredient: { type: Schema.Types.ObjectId, ref: "Ingredient" },
  recipeingredient: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

module.exports = model("Recipe", RecipeSchema);
