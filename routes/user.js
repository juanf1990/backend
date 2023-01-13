// import express from "express";
// const router = express.Router();

// import { createUser, deleteUser, loginUser } from "../models/user.js";

// // POST /user
// router.post("/signup", async (req, res) => {
//   const user = await createUser(req.body);
//   res.status(201).json(user);
// });

// // POST /user
// router.get("/", async (req, res) => {
//   const user = await loginUser(req.body.email);
//   res.status(201).json(user);
// });

// // DELETE /user/:id
// router.delete("/:id", async (req, res) => {
//   const user = await deleteUser(req.params.id);
//   res.status(200).json(user);
// });

// export default router;

import { Router } from "express";
const router = Router();

import getUser from "../models/user.js";
router.get("/", async (req, res) => {
  //Get all users
  const users = await getUser();
  console.log("User");
  res.status(200).json({ success: true, payload: users });
});

export default router;
