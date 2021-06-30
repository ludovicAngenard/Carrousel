module.exports = logger;
function logger(){
    return async (ctx, next)=>{
        console.log("Requête reçu:",ctx.req.method,ctx.req.url);
        await next();
    };
}