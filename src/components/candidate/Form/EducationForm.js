import React from 'react'

const EducationForm = ({formData, onChangeFn}) => {
  return (
    <div>
        <div className="form-group my-2">
            <h6>Education Details</h6>
            <label >Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={onChangeFn} className="form-control" />
        </div>
    </div>
  )
}

export default EducationForm