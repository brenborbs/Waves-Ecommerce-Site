const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const moment = require("moment");
const SALT_I = 10;
require('dotenv').config();

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    required: true,
    minLength: 5
  },
  name:{
    type:String,
    required: true,
    maxlength:100
},
lastname:{
    type:String,
    required: true,
    maxlength:100
},
cart:{
    type:Array,
    default: []
},
history:{
    type:Array,
    default: []
},
role:{
    type:Number,
    default:0
},
token:{
    type:String
},
resetToken:{
    type:String
},
resetTokenExp:{
    type:Number
},
});

// encrypt password and generate salt 
userSchema.pre('save', function(next) {
  var user = this;
  // option to update the password
  if (user.isModified('password')){
    bcrypt.genSalt(SALT_I, function(err, salt) {
      if(err) return next(err);
  
      bcrypt.hash(user.password,salt,function(err,hash) {
        if(err) return next(err);
        user.password = hash;
        next();
      });
    })
  } else {
    next()
  }
})
// method compare password , cb=callback 
userSchema.methods.comparePassword = function(candidatePassword,cb){
  bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
      if(err) return cb(err);
      cb(null,isMatch)
  })
}

userSchema.methods.generateResetToken = function(cb){
  var user = this;

  crypto.randomBytes(20,function(err,buffer){
      var token = buffer.toString('hex');
      var today = moment().startOf('day').valueOf();
      var tomorrow = moment(today).endOf('day').valueOf();

      user.resetToken = token;
      user.resetTokenExp = tomorrow;
      user.save(function(err,user){
          if(err) return cb(err);
          cb(null,user);
      })
  })
}

// generate jsonwebtoken, cb=callback
userSchema.methods.generateToken = function(cb){
  var user = this;
  // convert user id to string and pass .env password file
  var token = jwt.sign(user._id.toHexString(), process.env.SECRET)

  user.token = token;
  user.save(function(err,user){
      if(err) return cb(err);
      cb(null,user);
  })
}

// user find by token, custom static method
userSchema.statics.findByToken = function(token,cb){
  var user = this;
  // veryify jwt
  jwt.verify(token,process.env.SECRET,function(err,decode){
      user.findOne({"_id":decode,"token":token},function(err,user){
          if(err) return cb(err);
          cb(null,user);
      })
  })
}

const User = mongoose.model('User', userSchema);

module.exports = { User }