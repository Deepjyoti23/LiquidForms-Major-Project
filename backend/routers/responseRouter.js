const req = require('express/lib/request');
const Model = require('../models/formModel');
const {Router} = require('express');
const router = Router();

router.post('/add', (req,res) => {
    console.log(req.body);
    
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {

        console.error(err);
        res.status(500).json(err);
        
    });
});
    router.post('/authenticate', (req, res) => {

        Model.findOne(req.body)
        .then((result) => {
            if(result) res.json(result);
            else res.status(401).json({message : 'Invalid Credentials' });
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });

    });
    
    router.get('/getall', (req,res) => {
        Model.find({})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });    
    })

    router.get('/getbyform/:id', (req,res) => {
        Model.find({form : req.params.id})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });    
    })
    
    router.get('/getbyid/:id', (req,res) => {
        Model.findById(req.params.id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });    
    })

module.exports  = router;