const path = require("path");
const koa = require("koa");
const router = require("koa-router")();
var bodyParser = require('koa-bodyparser');
const user = require("./routes/user");
const photo = require("./routes/photo");
const createAdmin = require("./middleware/createAdmin")
const PORT = process.env.PORT || 3000;

var mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/carrousel",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
const app = new koa();

app.use(createAdmin());

// end-point
router.use("/user",user.routes());
router.use("/photo", photo.routes())
app.use(bodyParser());

app.use(router.routes());
app.listen(PORT,()=>{
    console.log(`le serveur ecoute sur le port ${PORT}`);
});
