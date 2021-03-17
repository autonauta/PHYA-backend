const express = require("express");
const router = express.Router();

const { create, list } = require("../controllers/reportController");

router.post("/new", create);
router.get("/list", list);

module.exports = router;
