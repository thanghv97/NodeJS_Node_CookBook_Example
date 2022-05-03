const router = require("koa-router")();

router.get("/", async function(ctx) {
    console.log("Inside /")
    const title = "Koa.js";
    ctx.body = `
        <html>
            <head>
                <title> ${title} </title>
                <link ref="stylesheet" href="styles.css">
            </head>
            <body>
                <h1> ${title} </h1>
                <p> Welcome to ${title} </p>
            </body>
        </html>
    `;
}) 

module.exports = router;