const router = require("koa-router")();

const photoController = require("../controller/Photo.js")


router.get("/", async function(ctx,next) {
    await photoController.photo_list(ctx)
    await next();
})
.get("/:id", async function(ctx,next) {
    await photoController.photo_detail(ctx)
    await next();
})
.post("/", function(ctx,next) {
    photoController.photo_create_post(ctx)
    next();
});

module.exports = router;