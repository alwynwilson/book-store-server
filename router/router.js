const express = require("express");
const router = new express.Router();
const db = require("../db/connection");

router.get("/books", (req, res) => {
  const q = "SELECT * from books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/books", (req, res) => {
  const {title,description,cover} = req.body
  console.log(title,description,cover);
  
  const q = "INSERT INTO books (title, description, cover) VALUES (?, ?, ?)";
  const values = [title,description,cover];

  db.query(q, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Database error");
      return;
    }
    res.status(200).send("Book inserted successfully");
  });
});

router.delete("/books/:id",(req,res)=>{
  const bookid = req.params.id
  console.log(bookid);
  const q = "DELETE FROM books WHERE id = ?"
  const values = [bookid];
  db.query(q, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Database error");
      return;
    }
    res.status(200).send("Book deleted successfully");
  });
})

router.put("/books/:id", (req, res) => {
  const {title,description,cover} = req.body
  const {id} = req.params
  console.log(title,description,cover,id);
  
  const q = "UPDATE books SET title = ?, description = ?, cover= ? WHERE id = ?";
  const values = [title,description,cover,id];

  db.query(q, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Database error");
      return;
    }
    res.status(200).send("Book updated successfully");
  });
});


module.exports = router;
