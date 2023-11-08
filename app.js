const express = require("express");
const connectDB = require("./database");
const userRoutes = require("./api/user/user.routes");
// const recipeRoutes = require("./api/recipe/recipe.routes");
// const ingredientRoutes = require("./api/ingredient/ingredient.routes");
// const categoryRoutes = require("./api/category/category.routes");
const { notFound } = require("./middlewares/notFound");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
});

app.use("/api/user", userRoutes);
// app.use("/api/review", recipeRoutes);
// app.use("/api/ingredient", ingredientRoutes);
// app.use("/api/category", categoryRoutes);

app.use(notFound);
app.use(errorHandler);

connectDB();
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
