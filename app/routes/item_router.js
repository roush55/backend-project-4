//import router for express
const express=require('express')
const {create,index,update,show}=require('../controllers/items_controllers')
//create router for items
const router =express.Router()




router.post("/",create);
router.get("/",index);
router.patch("/:id",update);
router.get("/:id",show);


module.exports=router