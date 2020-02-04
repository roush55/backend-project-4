//import router for express
const express=require('express')
const passport = require('passport');

const Item=require('../models/art.js')
const user=require('../models/user')
const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404;

const requireOwnership = customErrors.requireOwnership;


const requireToken = passport.authenticate('bearer', {session:false})

const router = express.Router();
//show all arts 
router.get("/items/all",(req,res,next) => {
    Item.find({})
    .then(items => {
        res.status(200).json({items:items})
    })
    .catch(err => console.log(err))
})

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
router.put('/items/:id',requireToken,(req,res,next) => {
    const itemId = req.params.id;
    const updateItem =req.body.item;
    Item.findById(itemId)
    .then(handle404)
    .then((item)=>{
        requireOwnership(req,item)
        return item.update(updateItem)
    })
    .then(()=> res.sendStatus(204))
    .catch(next)
})




//show
router.get("/items/:id",requireToken,(req,res,next) => {
    // console.log('xxx')
    const itemId = req.params.id
    Item.findById(itemId)
    .then(handle404)
    .then((item) => {
    //requireOwnership(req,item)
        res.status(200).json({item:item})
    })
    .catch(next)
});

router.delete('/items/:id',requireToken,(req,res,next) => {
    const itemId= req.params.id
    Item.findById(itemId)
    .then(handle404)
    .then((item) => {
        requireOwnership(req,item)
        item.remove()
    })
    .then(() => res.sendStatus(204))
    
    .catch(next)
})


module.exports=router