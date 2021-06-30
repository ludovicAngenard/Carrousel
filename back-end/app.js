const path = require("path");
const koa = require("koa");
const serve = require("koa-static");
const router = require("koa-router")();
const index = require("./routes/index");
const photo = require("./routes/photo");
const logger = require("./middleware/logger")
const PORT = process.env.PORT || 3000;

var mongoose = require("mongoose");
var Photo = require("./model/Photo.js");
mongoose.connect(
    "mongodb://localhost:27017/carrousel",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const app = new Koa();
app.use(logger());

// end-point
router.use("/",index.routes());
router.use("/photo", index.routes())

const app = new koa();
//app.use(logger());
app.use(views(path.join(__dirname,"views"),{
    extension: "ejs",
}));

router.use("/",index.routes());
app.use(router.routes());


app.listen(PORT,()=>{
    console.log(`le serveur ecoute sur le port ${PORT}`);
});
