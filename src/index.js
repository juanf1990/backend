import "dotenv/config";
import cors from "cors";
import express, { application } from "express";
import models from "./models";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/posts", routes.post);

app.get("*", function (req, res, next) {
  const error = new Error(`${req.ip} tried to access ${req.originalUrl}`);

  error.statusCode = 301;

  next(error);
});

app.use((error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500;

  if (error.statusCode === 301) {
    return res.status(301).redirect("/not-found");
  }

  return res.status(error.statusCode).json({ error: error.toString() });
});

// app.use(async (req, res, next) => {
//   req.context = {
//     models,
//     me: await models.User.findByLogin("rwieruch"),
//   };
//   next();
// });

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});

const createUserwithPosts = async () => {
  await models.User.create(
    {
      email: "jondoe@gmail.com",
      fullName: "Jon Doe",
      password: "password",
      posts: [
        {
          imgUrl: "https://picsum.photos/200/300",
          text: "Hello World!",
          userId: 1,
          readBy: [1, 2, 3],
        },
      ],
    },
    {
      include: [models.Post],
    }
  );
};

createUserwithPosts();

const createUser = async () => {
  await models.User.create({
    email: "john@jow@.com",
    fullName: "Jon Doe",
    password: "password",
  });
};

createUser();
