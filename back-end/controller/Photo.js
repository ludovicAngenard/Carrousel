var Photo = require('../models/Photo.js');


exports.photo_list = async function(ctx) {
    var json = []
    for await (const doc of Photo.find()) {
        json.push(doc)
    }
    ctx.body = await json
};

exports.photo_detail = async function(ctx) {
    photo = Photo.findOne({ "_id": `${ctx.params.id}` })
    ctx.body = await photo
};

exports.photo_create_photo = function(ctx) {
    var photo = new Photo({
        link: ctx.request.body.link,
      })
      console.log(photo)
      photo.save().then((doc)=>{
        console.log("Nouvelle photo ajouté:",doc.link, doc._id);
        });
    ctx.body = { "valid":"valid input" }

};

exports.photo_delete_photo = function(ctx) {
    Photo.deleteOne({ "_id": `${ctx.params.id}`}).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });
    ctx.body = { "valid":"valid delete" }
};