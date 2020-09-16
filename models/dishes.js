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

var Dishes=mongoose.model('Dish',dishSchema);

module.exports=Dishes;
