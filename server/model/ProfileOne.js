const mongoose = require("mongoose");

const profileOneSchema = new mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, default: null },
  candidate: {type: mongoose.Schema.Types.ObjectId, ref: 'Candidate'},
  waNumber: { type: String, default: null },
  gender: { type: String, default: null },
  highestQualification: { type: String, default: null },
  specialization: { type: String, default: null },
  university: { type: String, default: null },
  courseType: { type: String, default: null },
  passingYear: { type: Date, default: null },
  skills: { type: String, default: null },
  careerStatus: { type: String, default: null },
  yearsOfExperience: { type: String, default: null },
  employmentStatus: { type: String, default: null },
  currentCompany: { type: String, default: null },
  jobTitle: { type: String, default: null },
  currentCity: { type: String, default: null },
  workingSince: { type: Date, default: null },
  currentCTC: { type: String, default: null },
  currentFixedCTC: { type: String, default: null },
  noticePeriod: { type: String, default: null },
  noticePeriodNegotiable: { type: String, default: null },
  industry: { type: String, default: null },
  department: { type: String, default: null },
  otherDepartment: { type: String, default: null },
  workArrangement: { type: String, default: null },
  prefferedJobType: { type: String, default: null },
  preferredEmploymentType: { type: String, default: null },
  preferredWorkArrangement: { type: String, default: null },
  willingToRelocate: { type: String, default: null },
  preferredWorkLocations: { type: String, default: null },
  preferredIndustry: { type: String, default: null },
  preferredDepartment: { type: String, default: null },
  preferredCTC:{ type: String, default: null },
});

const ProfileOne = mongoose.model('profileone', profileOneSchema);
ProfileOne.createIndexes();
module.exports = ProfileOne;