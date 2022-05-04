const Hapi = require("@hapi/hapi");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 1711;

const initialize = async () => {
    const server = Hapi.Server({
        port: PORT,
        host: HOSTNAME, 
    });

    await server.register(require("@hapi/vision"));

    server.views({
        engines: {
            ejs: require("ejs"),
        },
        relativeTo: __dirname,
        path: "views",
    });

    server.route({
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return h.view("index", {
                title: "Hapi",
            })
        }
    })

    await server.start();
    console.log("Server listening on", server.info.uri);
}

initialize();