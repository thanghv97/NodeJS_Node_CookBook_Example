const fastify = require('fastify')();

const PORT = process.env.PORT || 1711;

// fastify.get("/", async (request, reply) => {
//     return { message: "Hello world!" };
// })

fastify.route({
    method: "GET",
    url: "/",
    handler: async (request, reply) => {
        reply.send({ message: "Hello world!" });
    },
});

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