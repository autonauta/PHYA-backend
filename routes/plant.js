const express = require("express");
const router = express.Router();

//MVC = Model View Controller

const {
  list,
  create,
  remove,
  plantById,
} = require("../controllers/plantController");

router.get("/list", list);
router.post("/create", create);
router.delete("/:plantById", remove);
router.param("plantById", plantById);

module.exports = router;
