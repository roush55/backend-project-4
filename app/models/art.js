const mongoose = require('mongoose')
const Schema = mongoose.Schema



const itemSchema = new mongoose.Schema({

        name:{type:String,
            required:true},
        price:{
            type:Number,
            required:true},
         img:{type:String,
            required:true},
    

owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
}
}
,{timestamps:true}

);







const Item= mongoose.model("Item",itemSchema)


module.exports=Item
   



