const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, unique: true, requred: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
});

module.exports = model("User", UserSchema);
