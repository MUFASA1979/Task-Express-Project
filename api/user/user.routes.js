const express = require("express");
const { getUser } = require("./user.controllers");

const router = express.Router();

// router.param("userId", async (req, res, next, userId) => {
//   const user = await fetchActor(userId, next);
//   req.user = user;
//   next();
// });

router.get("/", getUser);

module.exports = router;
