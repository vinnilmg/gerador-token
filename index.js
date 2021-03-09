const jwt = require("jsonwebtoken");

let payload = {
    iss: "testejwtgera",
    iat: new Date().getSeconds(),
    exp: new Date().setMinutes(60), // duracao
    name: "vinnilmg",
    email: "vini.delimagomes@gmail.com"
};

var token = jwt.sign(payload, "MySecretKey"); // gera token
console.log(token);