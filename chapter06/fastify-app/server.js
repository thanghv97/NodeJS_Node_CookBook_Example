const fastify = require('fastify')();

const PORT = process.env.PORT || 1711;

fastify.register(require("./plugins/hello-route"));

const startServer = async () => {
    try {
        await fastify.listen(PORT);
        console.log(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
startServer();