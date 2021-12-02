const express = require("express")
const router = express.Router()
const estudiantesController = require("../controllers/estudiantes.controller")

router.post("/loginestudiante", estudianteController.login)


module.exports = router