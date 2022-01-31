const express = require("express");
const MainRouter = express.Router();
const ProyectsController = require("../controller/ProyectsController");
const SkillsController = require("../controller/SkillsController");

MainRouter.get("/", (req, res) => {
  res.send("API PORTAFOLIO JOSEPHSB");
});

MainRouter.get("/api/Proyects", ProyectsController.getAll);
MainRouter.get("/api/Proyects/:id", ProyectsController.getById);
MainRouter.get("/api/Skills", SkillsController.getAll);

module.exports = MainRouter;
