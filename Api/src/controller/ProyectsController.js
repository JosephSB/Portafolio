const data = require("../db/proyects.json");
const ProyectsController = () => {};

ProyectsController.getAll = (req, res) => {
  res.json({
    error: false,
    results: data,
  });
};

ProyectsController.getById = (req, res) => {
  const ID = req.params.id;
  if (!Object.prototype.hasOwnProperty.call(data, ID)) {
    res.json({
      error: true,
      results: [],
    });
  }
  res.json({
    error: false,
    results: data[ID],
  });
};

module.exports = ProyectsController;
