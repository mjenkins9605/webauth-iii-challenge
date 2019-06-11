const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(
    "There are three kinds of people in this world, those who can count and those who can not!"
  );
});


const port = 5678;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});