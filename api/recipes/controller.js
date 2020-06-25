const Receipe = require('./model');

exports.createReceipe = (req, res) => {
    const errors = {};
    const receipe = new Receipe(req.body);
    receipe.save( function(err, receipe) {
        if(err) {
            errors.err = err;
            res.send(errors)
        }
        else {
            res.send(receipe)
        }
    })
}


exports.getAllReceipe = (req, res) => {
    const errors = {};
    Receipe.find(function(err, receipes) {
        if(err) {
            errors.err = err;
            res.send(errors)
        }
        else {
            res.send(receipes);
        }
    })
}