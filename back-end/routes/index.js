const router = require("koa-router")();

router.get("/",function (ctx,next){
    ctx.state= {
        title : "Campus Academy"
    };
    let json = {"title": "ceci est un titre"}
    ctx.body = {
        json
    };
});

module.exports = router;