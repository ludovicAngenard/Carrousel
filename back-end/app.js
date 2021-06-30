const path = require("path");
const cors = require('@koa/cors');
const Koa = require("koa");
const serve = require("koa-static");
const router = require("koa-router")();
const index = require("./routes/index");
const logger = require("./middleware/logger")
const PORT = process.env.PORT || 3000;

const app = new Koa();
app.use(cors());

app.use(logger());

// end-point
router.use("/",index.routes());


app.use(router.routes());

app.listen(PORT,()=>{
    console.log(`le serveur ecoute sur le port ${PORT}`);
});