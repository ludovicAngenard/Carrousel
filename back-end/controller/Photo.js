var Photo = require('../model/Photo.js');

exports.photo_list = async function(ctx, next) {
    console.log(ctx)
    res.send('NOT IMPLEMENTED: Photo list');
    ctx.body = {}
    next()
};

exports.photo_detail = async function(ctx, next) {
    console.log(ctx)
    //res.send('NOT IMPLEMENTED: Photo detail');
    ctx.body = {}
    next()
};

exports.photo_create_post = async function(ctx, next) {
    console.log(ctx)
    //res.send('NOT IMPLEMENTED: Photo create POST');
    ctx.body = {}
    next()
};