const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength:100
    },
    description:{
        required: true,
        type: String,
        maxlength:100000
    },
    price:{
        required: true,
        type: Number,
        maxlength: 255
    },
    brand:{ // option to change brand name in the future
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    shipping:{
        required: true,
        type: Boolean
    },
    available:{
        required: true,
        type: Boolean
    },
    wood:{ // option to change wood type in the future
        type: Schema.Types.ObjectId,
        ref: 'Wood',
        required: true
    },
    frets:{
        required: true,
        type: Number
    },
    sold:{ // to get best selling guitars at homepage
        type: Number,
        maxlength: 100,
        default: 0
    },
    publish:{
        required: true,
        type: Boolean
    },
    images:{
        type: Array,
        default:[]
    }
},{timestamps:true}); // to check when prod/data was entered

const Product = mongoose.model('Product',productSchema);
module.exports = { Product }