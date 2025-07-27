const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        qty: {
            type: Number,
            required: true
        },
    }],
    grandTotal: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
    }
}, { timestamps: true }
);  

const Order = mongoose.model("Order", orderSchema);

module.exports = {Order}; 
