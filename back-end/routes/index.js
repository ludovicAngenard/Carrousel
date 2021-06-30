const router = require("koa-router")();

router.get("/",function (ctx,next){
    ctx.state= {
        title : "Campus Academy"
    };
    var json = {"title": "ceci est un titre"}
    return json;
});

module.exports = router;