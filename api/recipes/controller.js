const Receipe = require('./model');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

exports.createReceipe = ((req, res) =>  {
    const errors = {};
    console.log(req.file)
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
})

    

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

