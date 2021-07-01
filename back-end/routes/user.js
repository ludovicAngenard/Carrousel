const router = require("koa-router")();


router.get("/", function(ctx,next) {
    console.log("user")
    next();
});

module.exports = router;