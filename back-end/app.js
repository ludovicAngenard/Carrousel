const path = require("path");
const koa = require("koa");
const serve = require("koa-static");
const router = require("koa-router")();
const index = require("./routes/index");
const views = require("koa-views");
const mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/carrousel';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//const logger = require("./middleware/logger");
console.log(db);
const PORT = process.env.PORT || 3000;

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