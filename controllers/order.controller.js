const orderService = require("../services/order.service");

exports.create = async (req, res, next) => {
 
        const model = {
            userId: req.user.userId,
            cardName: req.body.cardName,
            cardNumber: req.body.cardNumber,
            cardExpMonth: req.body.cardExpMonth,
            cardExpYear: req.body.cardExpYear,
            cardCVC: req.body.cardCVC,
            amount: req.body.amount,
            customerName:req.body.customerName,
            customerAddress:req.body.customerAddress,
            description:req.body.description
        };

        orderService.createOrder(model,(err,results)=>{
            if(err){
                return next(err);
            }
            return res.status(200).send({
                message: "success",
                data: results,
            });
        });
    
};

exports.update = async (req, res, next) => {
    try {
        const results = await orderService.updateOrder(req.body);
        return res.status(200).send({
            message: "success",
            data: results
        });
    } catch (error) {
        return next(error);
    }
};

exports.findAll = async (req, res, next) => {
    orderService.getOrders(req.user,(err,results)=>{
        if(err){
            return next(err);
        }
        return res.status(200).send({
            message: "success",
            data: results,
        });
    });
};
