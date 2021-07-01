var User = require('../models/Users.js');
module.exports = createAdmin;
function createAdmin(){
    return async (ctx, next)=>{
        var isCreated = false
        for await (const user of User.find()) {
            if(user.username == 'Ludovic'){
                isCreated = true;
            }
        }
        if (!isCreated){
            var Admin1 = new User();
            Admin1.password = bcrypt.hashSync("123456", 10);
            Admin1.username = "Ludovic";
            Admin1.role = "Admin";
            Admin1.save().then( (doc)=>{
                console.log("Nouvel utilisateur ajouté:",doc.password, doc.username);
            });

            var Admin2 = new User();
            Admin2.password = bcrypt.hashSync("123456", 10);
            Admin2.username = "Adrien";
            Admin2.role = "Admin";
            Admin2.save().then( (doc)=>{
                console.log("Nouvel utilisateur ajouté:",doc.password, doc.username);
            });

            var Admin3 = new User();
            Admin3.password = bcrypt.hashSync("123456", 10);
            Admin3.username = "Pierre";
            Admin3.role = "Admin";
            Admin3.save().then( (doc)=>{
                console.log("Nouvel utilisateur ajouté:",doc.password, doc.username);
            });
        }
        await next()
    };
}