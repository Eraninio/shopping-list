const express = require("express");
const moment = require("moment");
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

app.get("/products/:id", (req, res) => {
    for (let product of products) {
        if (product.id === req.params.id) {
            res.send(post);
        }
    }
});

app.post("/products", (req, res) => {
    console.log(req.body);
    let product = req.body;
    product.time = moment().format("lll");
    products.push(product);
    res.send(product);
});
//check
app.listen(3001);
