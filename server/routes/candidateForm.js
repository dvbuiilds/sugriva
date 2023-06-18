const ProfileOne = require("../model/ProfileOne");
const express = require("express");
const router = express.Router();
const verifyCandidateToken = require("../middleware/authorize");
const Candidate = require("../model/Candidate");

// submit the candidate form
router.post(
    '/submit',
    verifyCandidateToken,
    async (req, res)=> {
        const form = req.body;
        const candidate = req.header('candidateId');
        form.candidate = candidate;
        try{
            const formExists = await ProfileOne.findOne({candidate});
            if(!formExists){
                const formRes = await ProfileOne.create({
                    candidate: form.candidate,
                    waNumber: form.waNumber,
                    gender: form.gender,
                    highestQualification: form.highestQualification,
                    specialization: form.specialization,
                    university: form.university,
                    courseType: form.courseType,
                    passingYear: form.passingYear,
                    skills: form.skills,
                    careerStatus: form.careerStatus,
                    yearsOfExperience: form.yearsOfExperience,
                    employmentStatus: form.employmentStatus,
                    currentCompany: form.currentCompany,
                    jobTitle: form.jobTitle,
                    currentCity: form.currentCity,
                    workingSince: form.workingSince,
                    currentCTC: form.currentCTC,
                    currentFixedCTC: form.currentFixedCTC,
                    noticePeriod: form.noticePeriod,
                    noticePeriodNegotiable: form.noticePeriodNegotiable,
                    industry: form.industry,
                    department: form.department,
                    otherDepartment: form.otherDepartment,
                    workArrangement: form.workArrangement,
                    prefferedJobType: form.prefferedJobType,
                    preferredEmploymentType: form.preferredEmploymentType,
                    preferredWorkArrangement: form.preferredWorkArrangement,
                    willingToRelocate: form.willingToRelocate,
                    preferredWorkLocations: form.preferredWorkLocations,
                    preferredIndustry: form.preferredIndustry,
                    preferredDepartment: form.preferredDepartment,
                    preferredCTC: form.preferredCTC
                });
                const candidateUpdate = await Candidate.updateOne(
                    {_id: candidate},
                    {$set: {profile: formRes._id}}
                );
            }
            // if it exists then update the older form.
            else{
                const formUpdate = await ProfileOne.updateOne(
                    {candidate: candidate},
                    { $set: form}
                );
                const candidateUpdate = await Candidate.updateOne(
                    {_id: candidate},
                    {$set: {profile: formRes._id}}
                );
            }
        } catch(error){
            return res.status(400).json({error: error.message});
        }

        return res.status(200).json({success: true});
    }
);

module.exports = router;
