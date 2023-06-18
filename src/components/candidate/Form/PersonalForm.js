import React from 'react'

const PersonalForm = ({formData, onChangeFn}) => {
  const firstName = JSON.parse(localStorage.getItem('userPayload')).firstName;
  const lastName = JSON.parse(localStorage.getItem('userPayload')).lastName;
  const email = JSON.parse(localStorage.getItem('userPayload')).email;
  return (
    <div>
      <h6 className='mt-4'>Personal Information</h6>
      <div className="form-group my-2">
        <label>First Name</label>
        <input  type="text" name="firstName" onChange={onChangeFn} value={firstName} className="form-control"/>
      </div>
      <div className="form-group my-2">
        <label>Last Name</label>
        <input  type="text" name="lastName" onChange={onChangeFn} value={lastName} className="form-control"/>
      </div>
      <div className="form-group my-2">
        <label>Email</label>
        <input  type="email" name="email" onChange={onChangeFn} value={email} className="form-control"/>
      </div>
      <div className="form-group my-2">
        <label>WhatsApp Number</label>
        <input  type="text" name="waNumber" onChange={onChangeFn} value={formData.waNumber} className="form-control"/>
      </div>
      <div className="form-group my-2">
        <label >Gender</label>
        <select  name="gender" value={formData.gender} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected >Select Options</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
            <option>Prefer not to say</option>
        </select>
      </div>
    </div>
  )
}

export default PersonalForm