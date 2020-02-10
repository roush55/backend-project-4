const mongoose = require('mongoose')
const Schema = mongoose.Schema



const ItemSchema = new mongoose.Schema({

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
// biders: [biderSchema]
}
,{timestamps:true}

);







const Item= mongoose.model("Item",ItemSchema)


module.exports=Item
   



