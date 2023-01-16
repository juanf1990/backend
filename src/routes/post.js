import { Router } from "express";
import { BadRequestError } from "../utils/error";

const router = Router();

router.get("/", async (req, res) => {
  const posts = await req.context.models.Post.findAll();
  return res.send(posts);
});

router.get("/:postId", async (req, res) => {
  const post = await req.context.models.Post.findByPk(req.params.postId);
  return res.send(post);
});

router.post("/", async (req, res) => {
  let post;
  try {
    post = await req.context.models.Post.create({
      imgUrl: req.body.imgUrl,
      text: req.body.text,
      userId: req.context.me.id,
      readBy: req.body.readBy,
    });
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
  return res.send(post);
});

router.delete("/:postId", async (req, res) => {
  const result = await req.context.models.Post.destroy({
    where: { id: req.params.postId },
  });

  return res.send(true);
});

export default router;
