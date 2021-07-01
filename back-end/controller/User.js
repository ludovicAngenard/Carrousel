var User = require('../models/Users.js');


exports.register = async function(ctx) {
    var single = true;
    for await (const user of User.find()) {
        if(user.username == ctx.request.body.username){
            single = false;
        }
    }
    if(single){
        var newUser = new User();
        newUser.password = await bcrypt.hashSync(ctx.request.body.password, 10);
        newUser.username = ctx.request.body.username;
        newUser.role = "simpleUser";
        newUser.save().then( (doc)=>{
            console.log("Nouvel utilisateur ajouté:",doc.password, doc.username);
        });
        ctx.body = await newUser

    } else{
        console.log("utilisateur deja pris")
        ctx.body = await { currentUser: null}
    }

  };

exports.login = async function(ctx) {
    var user = await  User.findOne({username: ctx.request.body.username})
    if (!user || !user.comparePassword(ctx.request.body.password) ) {
        ctx.body = await {currentUser: null}
    } else{
        console.log("vous êtes connectés")
        ctx.body = await user
    }
};