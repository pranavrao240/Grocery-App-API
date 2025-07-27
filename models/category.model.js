const mongoose = require("mongoose");
const category = mongoose.model(
    "Category",
    mongoose.Schema({
        categoryName:{
            type:String,
            default:'',
            require:true,
            unique:true,
        },
        categoryDescription:{
            type:String,
            default:'',
            required:false
        },
        categoryImage:{
            type:String
        }
    },{
    toJson:{
    tranform:function (doc,ret) {
        ret.categoryId = ret._id.toString();
        delete ret._id;
        delete ret._v;
        
    }
}

})
);
module.exports = {
    category,
}