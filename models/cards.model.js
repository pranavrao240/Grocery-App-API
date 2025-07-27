const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
    {
        cardName: {
            type: String,
            required: true,
        },
        cardNumber: {
            type: String,
            required: true,
        },
        cardExpMonth: {
            type: Number,
            required: true,
        },
        cardExpYear: {
            type: Number,
            required: true,
        },
        // amount: {
        //     type: String,
        //     required: true,
        // },
        cardCVC: {
            type: String,
            required: true,
        },
        customerId: {
            type: String,
            required: true,
        },
        cardId: {
            type: String,
            required: true,
        },
        customerAddress: {
            line1: { type: String, required: true },
            city: { type: String, required: true },
            postal_code: { type: String, required: true },
            state: { type: String, required: true },
            country: { type: String, required: true }
        },
        customerName:{
            type:String,
            required:true
        },
        customerAddress:{
            line1: { type: String, required: true },
            city: { type: String, required: true },
            postal_code: { type: String, required: true },
            state: { type: String, required: true },
            country: { type: String, required: true }
        },
        description:{
            type:String,
            required:true

        }
        
        
    
    },
    { timestamps: true } // ✅ Corrected timestamps
);

const Card = mongoose.model("CustomerCards", CardSchema);

module.exports = Card; // ✅ Correct export
