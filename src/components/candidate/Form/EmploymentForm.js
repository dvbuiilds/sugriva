import React from 'react'

const EmploymentForm = ({formData, onChangeFn}) => {
  return (
    <div>
        <h6 className='mt-4'>Employment Details</h6>
        <div className="form-group my-2">
          <label >Career Status</label>
          <select name="careerStatus" value={formData.careerStatus} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>Fresher</option>
            <option>Experienced</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label >Years of Experience</label>
          <select name="yearsOfExperience" value={formData.yearsOfExperience} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>0</option>
            <option>0.5</option>
            <option>1</option>
            <option>1.5</option>
            <option>2</option>
            <option>2.5</option>
            <option>3</option>
            <option>3.5</option>
            <option>4</option>
            <option>4.5</option>
            <option>5</option>
            <option>5.5</option>
            <option>6</option>
            <option>6.5</option>
            <option>7</option>
            <option>7.5</option>
            <option>8</option>
            <option>8.5</option>
            <option>9</option>
            <option>9.5</option>
            <option>10</option>
            <option>10+</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label >Current Employment Status</label>
          <select name="employmentStatus" value={formData.employmentStatus} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>Employed (Full Time)</option>
            <option>Employed (Part Time)</option>
            <option>Unemployed</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label>Current/Previous Company </label>
          <input  type="text" name="currentCompany" onChange={onChangeFn} value={formData.currentCompany} className="form-control"/>
        </div>
        <div className="form-group my-2">
          <label>Job Title </label>
          <input  type="text" name="jobTitle" onChange={onChangeFn} value={formData.jobTitle} className="form-control"/>
        </div>
        <div className="form-group my-2">
          <label>Current City</label>
          <input  type="text" name="currentCity" onChange={onChangeFn} value={formData.currentCity} className="form-control"/>
        </div>
        <div className="form-group my-2">
          <label>Working Since</label>
          <input  type="date" name="workingSince" onChange={onChangeFn} value={formData.workingSince} className="form-control"/>
        </div>
        <div className="form-group my-2">
          <label>Current CTC (in LPA)</label>
          <input  type="text" name="currentCTC" onChange={onChangeFn} value={formData.currentCTC} className="form-control"/>
        </div>
        <div className="form-group my-2">
          <label>Current Fixed CTC (in LPA)</label>
          <input  type="text" name="currentFixedCTC" onChange={onChangeFn} value={formData.currentFixedCTC} className="form-control"/>
        </div>
        <div className="form-group my-2">
          <label >Notice Period </label>
          <select name="noticePeriod" value={formData.noticePeriod} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>15 Days or less</option>
            <option>1 month</option>
            <option>2 months</option>
            <option>3 months</option>
            <option>More than 3 months</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label>Is Notice Period Negotiable </label>
          <select name="noticePeriodNegotiable" value={formData.noticePeriodNegotiable} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label >Industry </label>
          <select name="industry" value={formData.industry} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>Transportation</option>
            <option>Telecommunication</option>
            <option>Pharmaceutical</option>
            <option>Media & News</option>
            <option>Hospitality</option>
            <option>Health Care</option>
            <option>Food & Beverages</option>
            <option>Finance & Economic</option>
            <option>Apparel &Fashion</option>
            <option>Entertainment</option>
            <option>Education</option>
            <option>Computer & Technology</option>
            <option>Agriculture</option>
            <option>Advertising & Marketing</option>
            <option>Consumer Goods</option>
            <option>Venture Capital& Private Equity</option>
            <option>Staffing & Recruiting</option>
            <option>Sports</option>
            <option>Management Consulting</option>
            <option>Market Research</option>
            <option>Retail</option>
            <option>Mobile Games</option>
            <option>Internet</option>
            <option>Music</option>
            <option>Outsourcing/Offsourcing</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label >Department </label>
          <select name="department" value={formData.department} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>BFSI, Investments & Trading</option>
            <option>Customer Success, Service & Operations</option>
            <option>Data Science & Analytics</option>
            <option>Engineering – Hardware & Networks</option>
            <option>Engineering – Software & QA</option>
            <option>Finance & Accounting</option>
            <option>Human Resource</option>
            <option>IT & Information Security</option>
            <option>Marketing & Communication</option>
            <option>Product Management</option>
            <option>Project & Program Management</option>
            <option>Quality Assurance</option>
            <option>Sales & Business Development</option>
            <option>UX, Design & Architecture</option>
            <option>Consulting</option>
            <option>Content, Editorial & Journalism</option>
            <option>CSR & Social Service</option>
            <option>Research & Development</option>
            <option>Strategic & Top Management</option>
            <option>Teaching & Training</option>
            <option>Others</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label>Please specify (If others)</label>
          <input type="text" name="otherDepartment" onChange={onChangeFn} value={formData.otherDepartment} className="form-control"/>
        </div>
        <div className="form-group my-2">
          <label >Work Arrangement </label>
          <select name="workArrangement" value={formData.workArrangement} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>In-office</option>
            <option>Remote</option>
          </select>
        </div>

        <h6 className='mt-4'>Future Employment Details</h6>
        <div className="form-group my-2">
          <label >Preferred Job Type </label>
          <select name="prefferedJobType" value={formData.prefferedJobType} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>Permanent</option>
            <option>Temporary/Contract</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label >Preferred Employment Type</label>
          <select name="preferredEmploymentType" value={formData.preferredEmploymentType} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label >Preferred Work Arrangement </label>
          <select name="preferredWorkArrangement" value={formData.preferredWorkArrangement} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>In-office</option>
            <option>Remote</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label >Are you willing to relocate?</label>
          <select name="willingToRelocate" value={formData.willingToRelocate} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label>Preferred Work Locations</label>
          <input  type="text" name="preferredWorkLocations" onChange={onChangeFn} value={formData.preferredWorkLocations} className="form-control"/>
        </div>
        <div className="form-group my-2">
          <label >Preferred Industry </label>
          <select name="preferredIndustry" value={formData.preferredIndustry} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>Transportation</option>
            <option>Telecommunication</option>
            <option>Pharmaceutical</option>
            <option>Media & News</option>
            <option>Hospitality</option>
            <option>Health Care</option>
            <option>Food & Beverages</option>
            <option>Finance & Economic</option>
            <option>Apparel &Fashion</option>
            <option>Entertainment</option>
            <option>Education</option>
            <option>Computer & Technology</option>
            <option>Agriculture</option>
            <option>Advertising & Marketing</option>
            <option>Consumer Goods</option>
            <option>Venture Capital& Private Equity</option>
            <option>Staffing & Recruiting</option>
            <option>Sports</option>
            <option>Management Consulting</option>
            <option>Market Research</option>
            <option>Retail</option>
            <option>Mobile Games</option>
            <option>Internet</option>
            <option>Music</option>
            <option>Outsourcing/Offsourcing</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label >Preferred Department </label>
          <select name="preferredDepartment" value={formData.preferredDepartment} onChange={onChangeFn} className="form-control" >
            <option className='text-muted' selected>Select Options</option>
            <option>BFSI, Investments & Trading</option>
            <option>Customer Success, Service & Operations</option>
            <option>Data Science & Analytics</option>
            <option>Engineering – Hardware & Networks</option>
            <option>Engineering – Software & QA</option>
            <option>Finance & Accounting</option>
            <option>Human Resource</option>
            <option>IT & Information Security</option>
            <option>Marketing & Communication</option>
            <option>Product Management</option>
            <option>Project & Program Management</option>
            <option>Quality Assurance</option>
            <option>Sales & Business Development</option>
            <option>UX, Design & Architecture</option>
            <option>Consulting</option>
            <option>Content, Editorial & Journalism</option>
            <option>CSR & Social Service</option>
            <option>Research & Development</option>
            <option>Strategic & Top Management</option>
            <option>Teaching & Training</option>
            <option>Others</option>
          </select>
        </div>
        <div className="form-group my-2">
          <label>Preferred CTC (in LPA)</label>
          <input  type="text" name="preferredCTC" onChange={onChangeFn} value={formData.preferredCTC} className="form-control"/>
        </div>
    </div>
  )
}

export default EmploymentForm