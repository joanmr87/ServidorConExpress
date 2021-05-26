const database = require('../../database');
const { body, validationResult } = require("express-validator");
const { check } = require('express-validator');

module.exports = (route) => {

    route.post(
        "/",
        body("name").notEmpty().withMessage("Campo obligatorio").isLength({ min:3 }).withMessage("Debe tener al menos 3 caracteres"),
        body("age").notEmpty().withMessage("Campo obligatorio").isInt().withMessage("debe ser un numero"),        
        (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
                return;
            }

        const user = {        
            name: req.body.name,
            age: req.body.age,
        };
    
        const userName = user.name.toLocaleLowerCase().trim();

        if (database.DB.some((item) => item.name.toLocaleLowerCase().trim() == userName )){
            res.status(409).json({
                messege: "'name' debe ser unico"
            });     
        } else {
            database.add(user);       
            res.json(user);
        }
});
}