import React, { useState } from 'react'
import PersonalForm from './PersonalForm';
import EducationForm from './EducationForm';
import EmploymentForm from './EmploymentForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileSubmitted } from '../../../redux/user/actions';
import { useUser } from '../../../hooks/useUser';

const Forms = () => {
    useUser();
    const firstName = JSON.parse(localStorage.getItem('userPayload')).firstName;
    const lastName = JSON.parse(localStorage.getItem('userPayload')).lastName;
    const email = JSON.parse(localStorage.getItem('userPayload')).email;
    const navigate = useNavigate();
    const { authToken, id } = useSelector( state=> state.user ); 
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: firstName,
        lastName: lastName,
        email: email,
        waNumber: '',
        gender: '',
        highestQualification: '',
        specialization: '',
        university: '',
        courseType: '',
        passingYear: '',
        skills: '',
        careerStatus: '',
        yearsOfExperience: '',
        employmentStatus: '',
        currentCompany: '',
        jobTitle: '',
        currentCity: '',
        workingSince: '',
        currentCTC: '',
        currentFixedCTC: '',
        noticePeriod: '',
        noticePeriodNegotiable: '',
        industry: '',
        department: '',
        otherDepartment: '',
        workArrangement: '',
        prefferedJobType: '',
        preferredEmploymentType: '',
        preferredWorkArrangement: '',
        willingToRelocate: '',
        preferredWorkLocations: '',
        preferredIndustry: '',
        preferredDepartment: '',
        preferredCTC: '',
        candidate: id
    });
    
    const checkEmptyFields = ()=> {
        const form = document.form;
        for(let i = 0; i<form.length-1; ++i){
            if(form[i].required && (form[i].value === '' || form[i].value === 'Select Options')){
                return true;
            } 
        }
        return false;
    };
    const increaseStep = ()=>{
        if(checkEmptyFields()){
            alert('Please fill all required fields first.');
            return ;
        }
        if(step < 3){
            setStep(step+1);
        }
    };
    const decreaseStep = ()=>{
        if(step > 0){
            setStep(step-1);
        }
    };
    const onChangeFn = (event)=>{
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const onSubmitFn = async (event)=>{
        try{
            event.preventDefault();
            const formSubmitCall = await fetch(
                'http://localhost:5000/api/candidateform/submit',
                {
                    method: "POST",
                    mode: "cors",
                    headers: { 
                        'Content-Type': 'application/json',
                        'authToken': authToken,
                        'candidateId': id
                    },
                    body: JSON.stringify(formData)
                }
            );

            const formSubmitResponse = await formSubmitCall.json();
            if(formSubmitResponse.success){
                const user = JSON.parse(localStorage.getItem('userPayload'));
                const newUser = {
                    ...user,
                    profile: true
                };

                dispatch(setProfileSubmitted(true));
                localStorage.setItem('userPayload', JSON.stringify(newUser));
                alert('Form submitted successfully!');
            } else{
                alert('Some error occured while submitting the form. Please try again after some time.');
            }
            navigate('/candidate-dashboard');
        }
        catch(error){
            alert(error.message);
            console.log(error);
        }
    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6 '>
                        <div className='container bg-light rounded mt-5 p-4'>
                            <div className=''>
                                <h2>Candidate Information Form</h2>
                            </div>
                            <form name='form' onSubmit={ onSubmitFn }>
                                {
                                    step === 1? (
                                        <>
                                        <PersonalForm formData={formData} onChangeFn={onChangeFn} />
                                        <button className='btn btn-warning mr-5' onClick={()=>{increaseStep();}}>Next</button>
                                        </>
                                    ) :(<></>)
                                }
                                {
                                    step === 2? (
                                        <>
                                        <EducationForm formData={formData} onChangeFn={onChangeFn}/>
                                        <button className='btn btn-warning mr-5' onClick={()=>{decreaseStep();}}>Previous</button>
                                        <button className='btn btn-warning mr-5' onClick={()=>{increaseStep();}}>Next</button>
                                        </>
                                    ) :(<></>)
                                }
                                {
                                    step === 3? (
                                        <>
                                        <EmploymentForm formData={formData} onChangeFn={onChangeFn}/>
                                        <button className='btn btn-warning mr-5' onClick={()=>{decreaseStep();}}>Previous</button>
                                        <button type="submit" className="btn btn-primary mr-5" disabled={step<3 || step>3} >Submit</button>
                                        </>
                                    ): (<></>)
                                }
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
            </div>
        </div>
    );
};

export default Forms