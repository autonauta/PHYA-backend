const Report = require("../models/Report");

exports.create = (req, res) => {
  const report = new Report(req.body);
  report.save((err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "Something went wrong, report was not created",
      });
    }
    res.json({ data });
  });
};

exports.list = (req, res) => {
  Report.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Something went wrong, report list could not be consulted",
      });
    }
    res.json({ data });
  });
};
