const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile', default: null}
});

const Candidate = mongoose.model('candiate', candidateSchema);
Candidate.createIndexes();
module.exports = Candidate;