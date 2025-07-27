const mongoose = require("mongoose");
const category = require("./category.model");
const { relatedProduct } = require("./related-products.model");
const product = mongoose.model(
    "Product",
    mongoose.Schema({
        productName:{
            type:String,
            required:true,
            unique:true,
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category",

        },
        favourite:{
            type:Boolean,
            default:false,
        },
        
        productShortDesc:{
            type:String,
            required:true,
        },
        productDesc:{
            type:String,
            required:false,
            
        },productPrice:{
            type:Number,
            required:true,
            
            
        },
        productSalePrice:{
            type:Number,
            required:true,
            default:0

        },
        productSKU:{
            type:String,
            required:false
        },
        productType:{
            type:String,
            required:true,
            default:"Simple"
        },
        productStatus:{
            type:String,
            default:"IN",
        },
        stockStatus:{
            type:String,
            default:"IN",
        },
        productImage:{
            type:String,
        },
        createdAt:{
            type:Date,
        },
        updatedAt:{
            type:Date,
        },
        relatedProducts:[
           { 
            type:mongoose.Schema.Types.ObjectId,
            ref:"RelatedProduct"
            }
        ]

    },{
        toJSON:{
            transform:function (doc,ret) {
                ret.productId = ret._id.toString();
                delete ret._id;
                delete ret._v;
                
            }
        }
    }
)
);

module.exports={
    product
}