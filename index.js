require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require('./router/router')
const db = require("./db/connection")


const server = express();

server.use(express.json());
server.use(cors());
server.use(router)


db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL!");
});

PORT = 3000 || process.env.PORT;

server.listen(PORT, (res) => {
  console.log("Server initiated successfully");
});

server.get("/", (req, res) => {
  res.json("backend testing successfull");
});

// server.get("/books", (req, res) => {
//   const q = "SELECT * from books";
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });
