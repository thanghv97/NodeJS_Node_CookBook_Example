const Hapi = require("@hapi/hapi");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 1711;

const initialize = async () => {
    const server = Hapi.Server({
        port: PORT,
        host: HOSTNAME, 
    });

    server.route({
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Welcome to Hapi";
        }
    })

    await server.start();
    console.log("Server listening on", server.info.uri);
}

initialize();