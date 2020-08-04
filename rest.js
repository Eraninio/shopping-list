const express = require("express");
const moment = require('moment');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let products = [
    {
        id: 1,
        name: "milk",
        time: moment().format("lll"),
    },
    {
        id: 2,
        name: "bread",
        time: moment().format("lll"),
    },
];

app.get("/products", (req, res) => {
    res.send(products);
});

app.listen(3001);
