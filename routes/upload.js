const express=require('express');
const bodyParser=require('body-parser');
const multer=require('multer');
const auth=require('../auth');

var storage=multer.diskStorage({
destination:(req,file,cb)=>{
cb(null,'public/images');
},
filename:(req,file,cb)=>{
cb(null,file.originalname);
}
});

const imageFileFilter=(req,file,cb)=>{
if(file.originalname.match(/\.(jpg\jpeg\png\gif)$/)){
    return cb(new Error('another type'),false);
}
else
{
    cb(null,true);

}
};
const upload=multer({storage:storage, fileFilter : imageFileFilter});




const uploadRouter=express.Router();

uploadRouter.use(bodyParser.json());
uploadRouter.route('/')
.get((req,res,next)=>{
    res.statusCode=403;
    res.end("cannot parse this request");
   
})
.post(upload.single('imageFile'),(req, res)=> {
        res.statusCode = 200;
       // res.setHeader('content-type', 'application/json');
        res.json(req.file);

    })
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("cannot parse this request");
   
})
.delete((req,res,next)=>{
    res.statusCode=403;
    res.end("cannot parse this request");
   
})
module.exports=uploadRouter;