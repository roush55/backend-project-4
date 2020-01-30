  const db =require('../../config/config')
const Item=require('../models/store')


const create=(req,res)=>{
    newItem=req.body //get the info from body parser
    item= new Item (newItem)
    item.save()
    .then(
        item => res.send(item)
        )
       .catch(err => console.log(err))     
}

const update=(req,res)=>{
    const id = req.params.id
     const updateItem=req.body
    Item.findById(id,updateItem)
   .then((item)=>{
      res.redirect(`/items/${id}`)
   }
   )
  .then(  
    restrant => res.send(item.name + "update")
   )
   .catch(
      err => res.send(err)

  )
}
const show = (req, res) => {
    const id = req.params.id
    Item.findById(id)
    .then(
        item => res.send(item)
    )
    .catch(
        err => res.send(err)
    )
}


const index=(req,res)=> {
    Item.find({})
    .then(
    
        items => res.send(items)
        )
    
    .catch(
        err => console.log(err)
    )
}
// //update function 
// const update ={
//     id=req.params.id

// }
module.exports={create,index,show ,update}