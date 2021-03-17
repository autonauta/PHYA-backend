const Plant = require("../models/Plant");

exports.create = (req, res) => {
  const plant = new Plant(req.body);
  plant.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Something went wrong, plant was not created",
      });
    }
    res.json({ data });
  });
};

exports.list = (req, res) => {
  Plant.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Something went wrong, plant list could not be consulted",
      });
    }
    res.json({ data });
  });
};

exports.remove = (req, res) => {
  let plant = req.plant;
  plant.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Something went wrong, plant could not be deleted",
      });
    }
    res.json({
      message: "Plant succesfully deleted",
    });
  });
};

exports.plantById = (req, res, next, id) => {
  Plant.findById(id).exec((err, plant) => {
    if (err || !plant) {
      return res.status(400).json({
        error: "Plant was not found or does not exist",
      });
    }
    req.plant = plant;
    next();
  });
};
