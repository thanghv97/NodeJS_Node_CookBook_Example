const express = require('express');

const routes = express.Router();
routes.get("/", (req, res) => {
    const title = "Express";
    res.send(
    `<html>
        <head>
            <title> ${title} </title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <h1> ${title} </h1>
            <p> Welcome to ${title} </p>
        </body>
    </html>`);
})

module.exports = routes;