const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send({ title: "Welcome to Express.js" });
});

module.exports = router;
