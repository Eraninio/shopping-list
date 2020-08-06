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

app.post("/products", (req, res) => {
    console.log(req.body);
    let product = {};
    product.id = products[products.length - 1].id + 1;
    product.name = req.body.name;
    product.time = moment().format("lll");
    products.push(product);
    res.send(product);
});
app.get("/products/:id", (req, res) => {
    for (let product of products) {
        if (product.id == req.params.id) {
            res.send(product);
        }
    }
});

app.put("/products/:id", (req, res) => {
    products.forEach((product, i) => {
        if (product.id == req.params.id) {
            products[i].name = req.body.name;
            products[i].time = moment().format("lll");
            res.send(products[i]);
        }
    });
});

app.delete("/products/:id", (req, res) => {
    products.forEach((product, i) => {
        if (product.id == req.params.id) {
            products.splice(i, 1);
            res.send(`${req.params.id} deleted`);
        }
    });
});

app.listen(3001);
