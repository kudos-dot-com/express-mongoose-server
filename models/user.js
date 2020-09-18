var mongoose=require('mongoose');
var schema=mongoose.Schema;
var passportLocalMongoose=require('passport-local-mongoose');


var user=new schema({
  /*  username: {
        type: String,
        required: true,
        unique: true
    },
    password:  {
        type: String,
        required: true
    },*/
    admin:{
    type:Boolean,
    default:false
}
});
user.plugin(passportLocalMongoose);
module.exports=mongoose.model('user',user);
