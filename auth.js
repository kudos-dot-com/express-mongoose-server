var passport=require('passport');
var localStrategy=require('passport-local').Strategy;
var user=require('./models/user');
var jwtStrategy=require('passport-jwt').Strategy;
var ExtractJwt=require('passport-jwt').ExtractJwt;
var  jwt=require('jsonwebtoken');

var config=require('./config');

exports.local=passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

/*exports.gettoken=function(user){
    return jwt.sign(user,'12345-67891-56789-54321',
        {expiresIn:3600});
};

var opts={};
opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey='12345-67891-56789-54321';

exports.jwtPassport=passport.use(new jwtStrategy(opts,(jwtPayload,done)=>{
    console.log('jwtpassport',jwtPayload);
    user.findOne({_id:jwtPayload.sub},(err,user)=>{
        if(err)
        {
           return done(err,false);
        }else if(user)
        {
        return done(null,user);
        }
        else{
            return done(null,false);
        }
    });
}));
exports.verifyUser=passport.authenticate('jwt',{session:false});*/