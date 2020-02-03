// const db =require('../../config/config')
// const Item=require('../models/art')
// const passport = require('passport');
// const customErrors = require('../../lib/custom_errors')
// const requireToken = passport.authenticate('bearer',{session:false})
// const requireOwnership = customErrors.requireOwnership


// const create=(req,res)=>{
//     const userId = req.user.id;
//        newItem=req.body.Item //get the info from body parser
//         newItem.owner = userId
//          item= new Item (newItem)
//     item.save()
//     .then(
//         item => res.send(item)
//         )
//        .catch(err => console.log(err))     
// }

// const update=(req,res)=>{
//     const id = req.params.id
//      const updateItem=req.body
//     Item.findById(id,updateItem)
//    .then((item)=>{
//       res.redirect(`/items/${id}`)
//    }
//    )
//   .then(  
//     item => res.send(item.name + "update")
//    )
//    .catch(
//       err => res.send(err)

//   )
// }
// const show = (req, res) => {
//     const id = req.params.id
//     Item.findById(id)
//     .then(
//         item => res.send(item)
//     )
//     .catch(
//         err => res.send(err)
//     )
// }


// const index=(req,res)=> {
//     Item.find({})
//     .then(
    
//         items => res.send(items)
//         )
    
//     .catch(
//         err => console.log(err)
//     )
// }
// const destroy = (req, res) => {
//     const id = req.params.id
//     Item.findById(id)
//     .then(
//        item => item.remove()
//         .then(
//             item => res.send(item.name + " deleted")
//         )
//         .catch(
//             err => res.send(err)
//         )
//     )
//     .catch(
//         err => res.send(err)
//     )
// }
// module.exports={create,index,show ,update,destroy}