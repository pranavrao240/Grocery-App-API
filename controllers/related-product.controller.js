const relatedProductService = require("../services/related-products.services");

exports.create = (req,res,next)=>{
    relatedProductService.addRelatedProduct(req.body,(error,results)=>{
        if(error){
            return next(error);
        }
        return res.status(200).send({
            message:"Success",
            data:results

        });

    })
}

exports.findRelated = (req, res, next) => {
    var model = {
        productId: req.params.productId,
    };

    if (!model.productId) {
        return res.status(400).send({ message: "Product ID is required" });
    }

    product.findById(model.productId)
        .populate("relatedProducts") // Fetch only related products
        .then((foundProduct) => {
            if (!foundProduct) {
                return res.status(404).send({ message: "Product not found" });
            }

            return res.status(200).send({
                message: "success",
                data: foundProduct.relatedProducts,
            });
        })
        .catch((error) => {
            return next(error);
        });
};


       
exports.delete = (req,res,next)=>{

    var model  = {
        id:req.params.id,

    };
    relatedProductService.removerelatedProduct(model,(error,results)=>{
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


