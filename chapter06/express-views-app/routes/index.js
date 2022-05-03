const express = require('express');

const routes = express.Router();
routes.get("/", (req, res) => {
    const title = "Express";
    res.render("index", {
        title: "Express with EJS",
    });
});

module.exports = routes;