const mongoose = require('mongoose')
const Schema = mongoose.Schema

const biderSchema = new Schema({
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Item",
        required:true
    }
},{
    timestamps: true
})


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
},
biders: [biderSchema]
}
,{timestamps:true}

);







const Item= mongoose.model("Item",itemSchema)


module.exports=Item
   



