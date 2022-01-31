const data = require("../db/skills.json");
const SkillsController = () => {};

SkillsController.getAll = (req, res) => {
  res.json({
    error: false,
    results: data,
  });
};

module.exports = SkillsController;
