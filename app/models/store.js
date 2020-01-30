const mongoose = require('mongoose')



const itemSchema = new mongoose.Schema({

        name:{type:String,
            required:true},
        price:{
            type:Number,
            required:true},
         img:{type:String,
            required:true}
    
},{timestamps:true});







const Item= mongoose.model("Item",itemSchema)


module.exports=Item
   



