const mongoose=require('mongoose');
const schema=mongoose.Schema({
    url:{
        type:String,
        required:true
    }
});
const model=mongoose.model('model',schema);
module.exports=model;