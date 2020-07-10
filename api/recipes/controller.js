const Receipe = require('./model');
const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        console.log(`user-${22}-${Date.now()}.${ext}`)
        cb(null, `user-${22}-${Date.now()}.${ext}`)
    }
});

const multerFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')) {
        cb(null, true)
    }
    else {
        cb(new Error('not an image! Please upload only images', 400), false)
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

exports.uploadPhoto = upload.single('receipeImage')

exports.createReceipe = ((req, res) =>  {
    const errors = {};
    const body = {
        title: req.body.title,
        prepareTime: req.body.prepareTime,
        difficulty: req.body.difficulty,
        cuisineType: req.body.cuisineType,
        ingredients: req.body.ingredients,
        image: req.file.path
    }
    const receipe = new Receipe(body);
    console.log(receipe)
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

