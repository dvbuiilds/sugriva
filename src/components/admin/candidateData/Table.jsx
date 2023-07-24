import React from 'react';
import { CSVLink } from 'react-csv';

const Table = (props) => {
    const { allProfiles, columns, handleRefreshBtn } = props;
    let csvData = [columns, ];

    const getFullYear = (dateString) => {
        const date = new Date(dateString);
        return date.getFullYear();
    };

    const getDateString = (dateString) => {
        const date = new Date(dateString);
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
    };

    return (
        <>
            <div className="row my-4">
                <div className="col-md-8">
                    <span className="h5" style={{textAlign: 'left'}}>Candidate Data</span>
                </div>
                <div className="col-md-4">
                    <button onClick={ async() => await handleRefreshBtn() } className='btn btn-sm btn-primary float-end mx-1' >Refresh</button>
                    <button className='btn btn-sm btn-primary float-end' ><CSVLink filename="file.csv" data={csvData} style={{textDecoration: 'none', color: 'white'}} >Download .csv</CSVLink></button>
                </div>
            </div>
            <table className="table p-1" style={ { textAlign: "center", display: "block", overflowX: "auto", overflowY: "auto", whiteSpace: "nowrap", overscrollBehaviorX: "none" } }>
                <thead>
                    <tr>
                        <th scope='col'></th>
                        { columns.map( (column, index) => <th key={index} scope='col'>{column}</th> )}
                    </tr>
                </thead>
                <tbody>
                { allProfiles.map( (profile, index) => {
                    csvData.push([
                        profile.firstName + ' ' + profile.lastName,
                        profile.gender,
                        profile.waNumber,
                        profile.gender,
                        profile.highestQualification,
                        profile.specialization,
                        profile.university,
                        profile.courseType,
                        getFullYear(profile.passingYear),
                        profile.skills,
                        profile.careerStatus,
                        profile.yearsOfExperience,
                        profile.employmentStatus,
                        profile.currentCompany,
                        profile.jobTitle,
                        profile.currentCity,
                        getDateString(profile.workingSince),
                        profile.currentCTC,
                        profile.currentFixedCTC,
                        profile.noticePeriod,
                        profile.industry,
                        profile.department,
                        profile.workArrangement,
                        profile.preferredEmploymentType,
                        profile.preferredWorkArrangement,
                        profile.preferredWorkLocations,
                        profile.preferredIndustry,
                        profile.preferredDepartment,
                        profile.preferredCTC,
                    ]);
                    return (
                        <tr key={ profile._id }>
                            <th scope="row">{index+1}</th>
                            <td>{ profile.firstName + ' ' + profile.lastName }</td>
                            <td>{ profile.email }</td>
                            <td>{ profile.waNumber }</td>
                            <td>{ profile.gender }</td>
                            <td>{ profile.highestQualification }</td>
                            <td>{ profile.specialization }</td>
                            <td>{ profile.university }</td>
                            <td>{ profile.courseType }</td>
                            <td>{ getFullYear(profile.passingYear) }</td>
                            <td>{ profile.skills }</td>
                            <td>{ profile.careerStatus }</td>
                            <td>{ profile.yearsOfExperience }</td>
                            <td>{ profile.employmentStatus }</td>
                            <td>{ profile.currentCompany }</td>
                            <td>{ profile.jobTitle }</td>
                            <td>{ profile.currentCity }</td>
                            <td>{ getDateString(profile.workingSince) }</td>
                            <td>{ profile.currentCTC }</td>
                            <td>{ profile.currentFixedCTC }</td>
                            <td>{ profile.noticePeriod }</td>
                            <td>{ profile.industry }</td>
                            <td>{ profile.department }</td>
                            <td>{ profile.workArrangement }</td>
                            <td>{ profile.preferredEmploymentType }</td>
                            <td>{ profile.preferredWorkArrangement }</td>
                            <td>{ profile.preferredWorkLocations }</td>
                            <td>{ profile.preferredIndustry }</td>
                            <td>{ profile.preferredDepartment }</td>
                            <td>{ profile.preferredCTC }</td>
                        </tr>
                    );}
                )}
                </tbody>
            </table>
        </>
    );
};

export default Table;