module.exports = logger;

function logger() {
    return (req, res, next) => {
        console.log("Request received:", req.method, req.url); // before middleware
        req.on('end', () => { // after middleware
            console.log("Response:", req.method, req.url);
        })     
        next();
    };
}