const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//feature/view-all-transaction

const Transaction = new mongoose.Schema({
    // Object name to be updated 
  ref_transaction_type: { 
    type: Schema.Types.ObjectId, 
    ref: 'transaction_type' 
  }, 
  customer_ref_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'customer' 
  },
  amount: { 
    type: Number, 
    required: true
  },
  interest: { 
    type: Number, 
    required: true 
  },
  total_amount: { 
    type: Number, 
    required: true 
  },
  description: { 
    type: String, 
    required: true
  },
  user_ref_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'user' 
  },
  store_ref_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'store' 
  }
}, { timestamps: true })

module.exports = mongoose.model('transaction', Transaction)
