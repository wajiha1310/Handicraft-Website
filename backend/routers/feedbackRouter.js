const express = require('express');
const Model = require('../models/feedbackModel');

// creating a router
const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {

    Model.find()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
});

// : denotes url parameter
router.get('/getbyname/:name', (req, res) => {
    console.log(req.params.name);
    Model.find({ name : req.params.name  })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/getbyemail/:email', (req, res) => {

    Model.findOne({ email : req.params.email })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyrating/:rating', (req, res) => {
    Model.findById(req.params.rating)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/getbytextarea/:textarea', (req, res) => {
    Model.findById(req.params.textarea)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id,req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/delete/:id', (req, res) => {
    
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;