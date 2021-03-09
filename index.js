const jwt = require("jsonwebtoken");

let payload = {
    iss: "testejwtgera.com", //ORIGEM
    iat: new Date().getSeconds(), // GERADO AS
    exp: new Date().setMinutes(60), // DURACAO
    name: "vinnilmg",
    email: "vini.delimagomes@gmail.com"
};

var token = jwt.sign(payload, "MySecretKey"); // gera token
console.log(token);