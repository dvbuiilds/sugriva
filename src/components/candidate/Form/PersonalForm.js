import React from 'react'

const PersonalForm = ({formData, onChangeFn}) => {
  return (
    <div>
      <h6 className='mt-4'>Personal Information</h6>
      <div className="form-group my-2">
        <label>First Name</label>
        <input required type="text" name="firstName" onChange={onChangeFn} value={formData.firstName} className="form-control"/>
      </div>
      <div className="form-group my-2">
        <label>Last Name</label>
        <input required type="text" name="lastName" onChange={onChangeFn} value={formData.lastName} className="form-control"/>
      </div>
      <div className="form-group my-2">
        <label>Email</label>
        <input required type="email" name="email" onChange={onChangeFn} value={formData.email} className="form-control"/>
      </div>
      <div className="form-group my-2">
        <label>WhatsApp Number</label>
        <input required type="text" name="waNumber" onChange={onChangeFn} value={formData.waNumber} className="form-control"/>
      </div>
      <div className="form-group my-2">
        <label >Gender</label>
        <select required name="gender" defaultValue={"Select Options"} value={formData.gender} onChange={onChangeFn} className="form-control" >
            <option className='text-muted'>Select Options</option>
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