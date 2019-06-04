const express = require("express");
const server = express();
server.use(express.json());

const acctsModel = require("./data/accounts-model");

server.get("/", (req, res) => {
  acctsModel
    .find()
    .then(accounts => res.status(200).json(accounts))
    .catch(err => res.status(500).json({ success: false, err }));
});
//works

server.get("/:id", (req, res) => {
  acctsModel
    .findById(req.params.id)
    .then(accounts => res.status(200).json(accounts))
    .catch(err => res.status(500).json({ success: false, err }));
});
//works

server.post("/", (req, res) => {
  acctsModel
    .add(req.body)
    .then(acctAdded => res.status(201).json(acctAdded))
    .catch(err => res.status(500).json({ success: false, err }));
});
//works

server.put("/:id", (req, res) => {
  acctsModel
    .update(req.params.id, req.body)
    .then(acctUpdated => res.status(202).json(acctUpdated))
    .catch(err => res.status(500).json({ success: false, err }));
});
//works

server.delete("/:id", (req, res) => {
  acctsModel
    .remove(req.params.id)
    .then(acctDel =>
      res.status(204).json({ message: "account deleted", acctDel })
    )
    .catch(err => res.status(500).json({ success: false, err }));
});
//works

module.exports = server;
