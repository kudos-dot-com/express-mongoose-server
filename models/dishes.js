const mongoose=require('mongoose');
const schema=mongoose.Schema;

const dishSchema=new schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    des:{
        type:String,
        required:true
    },
    rating:{
        max:5,
        min:1,
        type:Number,
        required:true
    }
},{
        timestamps:true
    }
); 
module.exports=mongoose.model('Dish',dishSchema);

