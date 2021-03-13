const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserByID,
  addUser,
  updateUser,
  deleteUser
} = require("../repositories/users.js");

/* GET: get users listing. */
router.get("/", (req, res, next) => {
  res.send(getUsers());
});

/* GET: get user by ID */
router.get("/:id", (req, res, next) => {
  const response = getUserByID(parseInt(req.params.id));
  res.send(response);
});

/* POST: add user to DB */
router.post("/", (req, res, next) => {
  const response = addUser(req.body);
  res.send(response);
});

/* PUT: update specific user */
router.put("/:id", (req, res, next) => {
  const response = updateUser(parseInt(req.params.id), req.body);
  res.send(response);
});

/* DELETE: delete specific user from DB */
router.delete("/:id", (req, res, next) => {
  const response = deleteUser(parseInt(req.params.id));
  res.send(response);
});

module.exports = router;
