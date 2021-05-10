const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Por favor agrega algun texto']
  },
  amount: {
    type: Number,
    required: [true, 'Por favor agrega un numero positivo o negativo']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);