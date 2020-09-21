const express=require('express');
const bodyParser=require('body-parser');

const mongoose=require('mongoose');

const Dishes=require('../models/dishes');

const auth=require('../auth');

dishRouter=express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')

.get((req,res,next)=>{
    
    Dishes.find({})
    .then((dishes)=>{
        res.statusCode=200;
        res.setHeader('content-type','application/json');
        res.json(dishes);
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.post(auth.verifyUser,(req,res,next)=>{
   Dishes.create(req.body)
   .then((dish)=>{
    res.statusCode=200;
    console.log("created new item");
    res.setHeader('content-type','application/json');
    res.json(dish);
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.put(auth.verifyUser,(req,res,next)=>{
    res.statusCode=403;
    res.end("cannot parse this request");
   
})
.delete(auth.verifyUser,(req,res,next)=>{
   res.end("deleteing all the dishes");
});

module.exports=dishRouter;