const router = require("koa-router")();

router.get("/",async function(ctx,next){
    ctx.state= {
        title : "Campus Academy"
    };
    await ctx.render("index");
});

module.exports = router;