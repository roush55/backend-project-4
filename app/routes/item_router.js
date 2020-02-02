//import router for express
const express=require('express')
const passport = require('passport');
//create router for items
const router =express.Router()
const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404;

const requireOwnership = customErrors.requireOwnership;


const requireToken = passport.authenticate('bearer', {session:false})


const Item=require('../models/art')
const User=require('../models/user')
//index
router.get("/items",requireToken,(req,res,next) => {
    const id = req.user.id;
   Item.find({'owner':id})
   .then((items) => {
       res.status(200).json({items:items})
   })
   .catch(next);
});
//create 
router.post("/items",requireToken,(req,res,next) => {
    const id = req.user.id
    const newItem = req.body.item
    newItem.owner = id

    Item.create(newItem)
    .then(item => {
        res.status(201).json({item:item})
    })
    .catch(next);
});
//update the item 
router.patch("/items/:id",requireToken,(req,res,next) => {
    const idItem = req.params.id;
    const updateItem = req.body.item;


    Item.findById(idItem)
    .then(handle404)
    .then((item) => {
        requireOwnership(req,item)
        return meme.update(updateItem)
    })
    .then(() => res.sendStatus(204))
    .catch(next)});

//show
router.get("/items/:id",requireToken,(req,res,next) => {
    const idItem = req.params.id
    Item.findById(idItem)
    .then(handle404)
    .then((item) => {
        requireOwnership(req,item)
        res.status(200).json({item:item})
    })
    .catch(next)
});
router.delete("/items/:id", requireToken,(req,res,next) => {
    const idItem = req.params.id
    Item.findById(idItem)
    .then(handle404)
    .then((item) => {
        requireOwnership(req,item)
        item.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})


module.exports=router