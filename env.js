import dotenv from "dotenv";

dotenv.config();

export default {
  databaseURL: process.env.DATABASE_URL,
};
