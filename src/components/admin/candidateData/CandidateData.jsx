import React, { useEffect, useState } from 'react';
import Table from './Table';
import { useSelector } from 'react-redux';


const CandidateData = (props) => {
    const { authToken } = useSelector( state=>state.user );
    let columns = [
        'Name',
        'Email',
        'WhatsApp',
        'Gender',
        'Qualification',
        'Specialization',
        'University',
        'Type of Course',
        'Passing Year',
        'Skills',
        'Career Status',
        'Experience',
        'Current Employment',
        'Company',
        'Job Title',
        'Current City',
        'Working Since',
        'Current CTC',
        'Current Fixed CTC',
        'Notice Period',
        'Industry',
        'Department',
        'Work Arrangement',
        'Preferred Job',
        'Preferred Work Arrangement',
        'Preferred Work Location',
        'Preferred Industry',
        'Preferred Department',
        'Preferred CTC',
    ];
    // let csvData = [columns,];
    const [allProfiles, setAllProfiles] = useState([]);
    // const [csvData, setCsvData] = useState([columns,]);

    const fetchCandidateData = async () => {
        // calling the api.
        const allProfilesFetch = await fetch(
            'http://localhost:5000/api/admin/all-profiles',
            {
                method: "GET",
                mode: "cors",
                headers: { 
                    'Content-Type': 'application/json',
                    'authToken': authToken,
                    'Accept': 'application/json'
                }
            }
        );

        const response = await allProfilesFetch.json();
        setAllProfiles(response.allProfiles);
    };

    const handleRefreshBtn = async ()=> {
        await fetchCandidateData();
    };

    useEffect( ()=> {
        if(allProfiles.length === 0){
            ( async () => await fetchCandidateData() )();
        }
    });

    return (
        <>
            <div className="container-fluid p-0" >
                <Table allProfiles={allProfiles} columns={columns} handleRefreshBtn={handleRefreshBtn} />
            </div>
        </>
    );
};

export default CandidateData;

/* <th scope='col'>Name</th>
<th scope='col'>Email</th>
<th scope='col'>WhatsApp</th>
<th scope='col'>Gender</th>
<th scope='col'>Qualification</th>
<th scope='col'>Specialization</th>
<th scope='col'>University</th>
<th scope='col'>Type of Course</th>
<th scope='col'>Passing Year</th>
<th scope='col'>Skills</th>
<th scope='col'>Career Status</th>
<th scope='col'>Experience</th>
<th scope='col'>Current Employment</th>
<th scope='col'>Company</th>
<th scope='col'>Job Title</th>
<th scope='col'>Current City</th>
<th scope='col'>Working Since</th>
<th scope='col'>Current CTC</th>
<th scope='col'>Current Fixed CTC</th>
<th scope='col'>Notice Period</th>
<th scope='col'>Industry</th>
<th scope='col'>Department</th>
<th scope='col'>Work Arrangement</th>
<th scope='col'>Preferred Job</th>
<th scope='col'>Preferred Work Arrangement</th>
<th scope='col'>Preferred Work Location</th>
<th scope='col'>Preferred Industry</th>
<th scope='col'>Preferred Department</th>
<th scope='col'>Preferred CTC</th> */