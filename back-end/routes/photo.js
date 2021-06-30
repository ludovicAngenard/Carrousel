const router = require("koa-router")();
const photoController = require("../controller/Photo.js")


router.get("/photo", function(ctx,next) {
    console.log(JSON.stringify(photoController))
    next();
});
router.get("/photo/:id", function(ctx,next) {
    console.log(JSON.stringify(photoController))
    next();
});
router.post("/photo", function(ctx,next) {
    console.log(JSON.stringify(photoController))
    next();
});

module.exports = router;