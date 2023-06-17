import React from 'react'

const EmploymentForm = ({formData, onChangeFn}) => {
  return (
    <div>
        <div className="form-group my-2">
          <h6>Employment Details</h6>
            <label >Age</label>
            <select name="age" defaultValue={0} value={formData.age} onChange={onChangeFn} className="form-control" >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    </div>
  )
}

export default EmploymentForm