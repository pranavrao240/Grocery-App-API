const cartService = require("../services/cart.service");

exports.create = (req, res, next) => {
    const model = {
        userId: req.user.userId,
        products: req.body.products,
    };

    cartService.addCartItem(model, (error, results) => {
        if (error) {
            return next(error); // ✅ Ensures only one response is sent
        }
        res.status(200).json({ message: "success", data: results });
    });
};

// exports.findAll = (req, res, next) => {
//     const model = {
//         userId: req.user.userId,
//     };

//     cartService.getCart(model, (error, results) => {
//         if (error) {
//             return next(error); // ✅ Ensures only one response is sent
//         }
//         res.status(200).json({ message: "success", data: results });
//     });
// };

exports.findAll = (req, res, next) => {
    const model = {
        userId: req.user.userId,
    };

    cartService.getCart(model, (error, results) => {
        if (error) {
            return next(error); // ✅ Stops execution if an error occurs
        }
        return res.status(200).json({ message: "success", data: results }); // ✅ Ensure response is sent only once
    });
};

// exports.delete = (req, res, next) => {
//     const model = {
//         userId: req.user.userId,
//         productId: req.body.productId,
//         qty: req.body.qty,
//     };

//     cartService.removeCartItem(model, (error, results) => {
//         if (error) {
//             return next(error); // ✅ Ensures only one response is sent
//         }
//         res.status(200).json({ message: "success", data: results });
//     });
// };

exports.delete = (req, res, next) => {
    const item = req.body.products?.[0]; // Get first product safely

    const model = {
        userId: req.user.userId,
        productId: item?.productId,
        qty: item?.qty,
    };

    if (!model.productId || !model.qty) {
        return res.status(400).json({ message: "Missing productId or qty" });
    }

    cartService.removeCartItem(model, (error, result) => {
        if (error) return next(error);
        if (result.success === false) {
            return res.status(400).json({ message: result.message });
        }
        return res.status(200).json({ message: "success", data: result });
    });
};

