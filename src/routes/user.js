import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const users = await req.context.models.User.findAll();
  return res.send(users);
});

router.get("/:userId", async (req, res) => {
  const user = await req.context.models.User.findByPk(req.params.userId);
  return res.send(user);
});

router.post("/", async (req, res) => {
  const user = await req.context.models.User.create(
    req.params.userId,
    req.params.email,
    req.params.password
  );
  return res.send(user);
});

router.delete("/:userId", async (req, res) => {
  const { [req.params.userId]: user, ...otherUsers } = await req.context.models
    .users;

  req.context.models.users = otherUsers;

  return res.send(user);
});

export default router;
