
//const Schema = mongoose.Schema()
const cartSchema= new mongoose.Schema({
    cart:[itemSchema]
   

},{timestamps:true});



const Cart=mongoose.model("Cart",cartSchema)

module.exports = cart