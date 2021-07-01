const router = require("koa-router")();
const userController = require("../controller/User.js")

router.post("/:id", async function(ctx,next) {
    await userController.login(ctx)
    await next();
})
.post("/",  function(ctx,next) {
    userController.register(ctx)
    next();
});

module.exports = router;