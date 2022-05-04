const Hapi = require("@hapi/hapi");
const path = require("path");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 1711;

const initialize = async () => {
    const server = Hapi.Server({
        port: PORT,
        host: HOSTNAME, 
    });

    await server.register(require('@hapi/inert'));

    server.route({
        method: "GET",
        path: "/",
        // handler file v1
        // handler: {
        //     file: path.join(__dirname, "files/file.txt"),
        // }

        // handler file v2
        handler: (request, h) => {
            return h.file(path.join(__dirname, "files/file.txt"));
        }
    })

    server.route({
        method: "GET",
        path: "/{param*}",
        handler: {
            directory: {
                path: path.join(__dirname, "files"),
            }
        }
    })

    await server.start();
    console.log("Server listening on", server.info.uri);
}

initialize();