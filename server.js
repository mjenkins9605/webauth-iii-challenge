const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router.js");
const userRouter = require("./users/users-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send(
    "There are three kinds of people in this world, those who can count and those who can not!"
  );
});

module.exports = server;
