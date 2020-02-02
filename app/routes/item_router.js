//import router for express
const express=require('express')
const {create,index,update,show,destroy}=require('../controllers/items_controllers')
//create router for items
const router =express.Router()
const customErrors = require('../../lib/custom_errors')
const requireOwnership = customErrors.requireOwnership
const passport = require('passport');
const requireToken = passport.authenticate('bearer',{session:false})


router.post("/",requireToken,(req,res)=>{
    const userId = req.user.id;
       newItem=req.body.Item //get the info from body parser
        newItem.owner = userId
         item= new Item (newItem)
    item.save()
    .then(
        item => res.send(item)
        )
       .catch(err => console.log(err))     
}
);

router.get("/",requireToken,index);
router.patch("/:id",update);
router.get("/:id",show);
router.delete("/:id", destroy)


module.exports=router