const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Unique email for each user
  },

  retypeEmail: {
    type: String,
    required: true,
    unique: true, // Unique email for each user
  },

  password: {
    type: String,
    required: true,
  },

  confirmPassword: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  otp: {
    type: String,
  },

  token: {
    type: String,
    required: true,
  },

  accountBalance: {
    type: String,
    default: 0.00
  },

  totalInvestment: {
    type: String,
    default: 0.00
  },

  totalProfit: {
    type: String,
    default: 0.00
  },

  bonus: {
    type: String,
    default: 0.00
  },

  tradingAccounts: {
    type: String,
    default: 0.00
  },

  ref: {
    type: String,
    default: 0.00
  },

  
totalDeposit: {
    type: String,
    default: 0.00
  },

totalWithdrawal: {
    type: String,
    default: 0.00
  },

  depositMethod: {
    fullName: {type: String},
    amountDeposited: {type: String},
    paymentMethod: {type: String},
    Status:{type: Boolean, default: false,},
    data: {type: String}
  },

  status: {
    type: Boolean,
    default: false,
  },
  
  verify: {
    type: Boolean,
    default: true,
  },

  isAdmin: {
    // Role of user it will be (normal or admin )
    type: Boolean,
    default: false,
  },

}, {timestamps: true});

module.exports = User = mongoose.model('User', UserSchema )

