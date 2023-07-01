const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
});

const Admin = mongoose.model('admin', adminSchema);
Admin.createIndexes();
module.exports = Admin;