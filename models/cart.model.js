const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true // Fix: Changed "require" to "required"
        },
        products: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,   
                    ref: "Product",
                    required: true // Fix: Changed "require" to "required"
                },
                qty: {
                    type: Number,
                    required: true // Fix: Changed "require" to "required"
                },
                amount: { type: Number, default:10 }
            }
        ]
    },
    {
        toJSON: {
            transform: function (doc, ret) {
                if (ret._id) {
                    ret.cartId = ret._id; 
                    delete ret._id;
                }
                delete ret.__v;
            }
        }
    }
    
    
);

module.exports = mongoose.model("Cart", cartSchema); // Fix: Corrected export
