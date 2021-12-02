const Estudiante = require("../models/estudiantes.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");


exports.login = function(req, res, next){
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    Estudiante.findOne({estudiante: req.body.estudiante, pass: hashedpass}, function(err, estudiante){
        let response = {
            token: null
        }

        if(estudiante !== null){
            response.token = jwt.sign({
                id: estudiante._id,
                estudiante: estudiante.estudiante
            }, "__secret__")
        }
        res.json(response);
    })
}