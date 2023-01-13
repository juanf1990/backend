import express from "express";
import logger from "morgan";
import cors from "cors";

import userRouter from "./routes/user.js";

const app = express();
const PORT = process.env.PORT ?? 3001;
// Refactor this PORT variable to call on the environment variable instead!

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(cors("*"));

app.use("/api/user", userRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
