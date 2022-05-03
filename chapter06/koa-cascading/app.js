const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const index = require('./routes/index');

const PORT = process.env.PORT || 1711;

const app = new Koa()
app.use(serve(path.join(__dirname, "public")));
app.use(async (ctx, next) => {
    console.log("First middleware start");
    await next();
    console.log("First middleware end");
})
app.use(async (ctx, next) => {
    console.log("Second middleware start");
    await next();
    console.log("Second middleware end");
})
app.use(async (ctx, next) => {
    console.log("Third middleware start");
    await next();
    console.log("Third middleware end");
})

router.use("/", index.routes())
app.use(router.routes())

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
