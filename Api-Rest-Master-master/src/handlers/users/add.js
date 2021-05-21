const database = require('../../database')

module.exports = (route) => {

    route.post("/", (req, res) => {
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