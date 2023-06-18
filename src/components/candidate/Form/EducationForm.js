import React from 'react'

const EducationForm = ({formData, onChangeFn}) => {
  return (
    <div>
        <h6 className='mt-4'>Education Details</h6>
        <div className="form-group my-2">
          <label >Highest Qualification: Doctorate/PhD, Masters/Post-Graduation, Gradution/Diploma, Course</label>
          <select name="highestQualification" defaultValue={"Select Options"} value={formData.highestQualification} onChange={onChangeFn} className="form-control" >
            <option className='text-muted'>Select Options</option>
            <option>B.Tech,/B.E.</option>
            <option>B.Sc</option>
            <option>B.B.A.</option>
            <option>B.Com</option>
            <option>B.C.A.</option>
            <option>B.Arch</option>
            <option>Other Graduate</option>
            <option>Charted Accountant</option>
            <option>Integrated PG</option>
            <option>M.A.</option>
            <option>M.Com</option>
            <option>M.S./M.Sc</option>
            <option>M.Tech</option>
            <option>M.B.A.</option>
            <option>Other Post-Graduate</option>
            <option>PhD/Doctorate</option>
            <option>MPHIL</option>
            <option>Other Doctorate</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label>Specialization</label>
          <input required type="text" name="specialization" onChange={onChangeFn} value={formData.specialization} className="form-control"/>
        </div>
        <div className="form-group my-2">
          <label>University/Institute</label>
          <input required type="text" name="university" onChange={onChangeFn} value={formData.university} className="form-control"/>
        </div>
        <div className="form-group my-2">
          <label>Type of course</label>
          <select name="courseType" defaultValue={"Select options"} value={formData.courseType} onChange={onChangeFn} className="form-control" >
            <option className='text-muted'>Select Options</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Distance Learning</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label>Passing Year</label>
          <input required type="date" name="passingYear" onChange={onChangeFn} value={formData.passingYear} className="form-control"/>
        </div>
        <div className="form-group my-2">
          <label>Skills</label>
          <input required type="text" name="skills" onChange={onChangeFn} value={formData.skills} className="form-control"/>
        </div>
    </div>
  )
}

export default EducationForm