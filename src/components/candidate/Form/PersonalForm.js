import React from 'react'

const PersonalForm = ({formData, onChangeFn}) => {
  return (
    <div>
      <div className="form-group my-2">
        <h6>Personal Information</h6>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={onChangeFn} value={formData.firstName} className="form-control"/>
      </div>
    </div>
  )
}

export default PersonalForm