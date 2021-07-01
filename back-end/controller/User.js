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
    } else{
        console.log("utilisateur deja pris")
    }

  };

exports.login = async function(ctx) {
    User.findOne({
        username: ctx.request.body.username
    }, async function(err, user) {
        if (err) throw err;
        console.log(JSON.stringify(user))
        if (!user || !user.comparePassword(ctx.request.body.password)) {
            console.log("vous n'êtes pas connecté")
            ctx.body = {
                'valid': 'pas connect'
            }
        } else{
            console.log("vous êtes connectés")
            ctx.body = {
                'valid': 'connect'
            }
        }

    });
};