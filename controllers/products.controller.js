const productService = require("../services/products.service");
const upload = require("../middleware/product.upload");


exports.create = (req,res,next)=>{
    upload(req,res,function (err) {
        if (err) {
            next(err);
            
        }else{
            const path = req.file != undefined? req.file.path.replace(/\\/g,"/"):"";
            var model  = {
                productName:req.body.productName,
                category:req.body.category,
                productShortDesc:req.body.productShortDesc,
                productDesc:req.body.productDesc,
                productPrice:req.body.productPrice,
                productSalePrice:req.body.productSalePrice,
                productSKU:req.body.productSKU,
                productType:req.body.productType,
                productStatus:req.body.productStatus,
                stockStatus:req.body.stockStatus,
                productImage:path !=""?"/"+path:"",
                createdAt:req.body.createdAt,
                updatedAt:req.body.updatedAt


            };
            productService.createProduct(model,(error,results)=>{
                if (error) {
                    return next(error);
                    
                }else{
                    return res.status(200).send({
                        message:"success",
                        data:results,
                    })
                }


            })
        }
        
    })

}



exports.findAll = (req,res,next)=>{

            var model  = {
                productIds:req.query.productIds,
                productName:req.body.productName,
                category:req.body.category,
                pageSize:req.query.pageSize,
                page:req.query.page,
                sort:req.query.sort,

            };
            productService.getProducts(model,(error,results)=>{
                if (error) {
                    return next(error);
                    
                }else{
                    return res.status(200).send({
                        message:"success",
                        data:results
                    })
                }


            })
        };
        
  

exports.findOne = (req,res,next)=>{

            var model  = {
                productId:req.params.id,

            };
            productService.getProductById(model,(error,results)=>{
                if (error) {
                    return next(error);
                    
                }else{
                    return res.status(200).send({
                        message:"success",
                        data:results
                    })
                }


            })
        };
        
  
exports.update = (req,res,next)=>{
            upload(req,res,function (err) {
                if (err) {
                    next(err);
                    
                }else{
                    const path = req.file != undefined? req.file.path.replace(/\\/g,"/"):"";
                    var model  = {
                        productId:req.params.id,
                        productName:req.body.categoryName,
                        category:req.body.category,
                        productShortDesc:req.body.productShortDesc,
                        productDesc:req.body.productDesc,
                        productPrice:req.body.productPrice,
                        productSalePrice:req.body.productSalePrice,
                        productSKU:req.body.productSKU,
                        productType:req.body.productType,
                        productStatus:req.body.productStatus,
                        stockStatus:req.body.stockStatus,
                        productImage:path !=""?"/"+path:""
        
                    };
                    productService.updateProduct(model,(error,results)=>{
                        if (error) {
                            return next(error);
                            
                        }else{
                            return res.status(200).send({
                                message:"success",
                                data:results
                            })
                        }
        
        
                    })
                }
                
            })
        
        }

        
exports.delete = (req,res,next)=>{

    var model  = {
        productId:req.params.id,

    };
    productService.deleteProduct(model,(error,results)=>{
        if (error) {
            return next(error);
            
        }else{
            return res.status(200).send({
                message:"success",
                data:results
            });
        }


    });
};

