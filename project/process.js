const configDotenv = require("dotenv").config;

console.log(process.pid);


// node m
console.log("args", process.argv);

console.log(configDotenv());

const n = process.env.NODE_ENV = 'development';
const p = process.env.PORT = 3000;
console.log(n, p);


while(Math.random > 0.5) {
    console.count("looping");

    process.exit();
}
