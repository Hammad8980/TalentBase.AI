import React, { useState } from 'react';
import './SignUp.css';
import StudentSignUp from './StudentSignUp';
import AcademiaSignUp from './AcademiaSignUp';
import IndustrySignUp from './IndustrySignUp';

const SelectRole = () => {
    const [selectedRole, setSelectedRole] = useState('');

    const handleOptionChange = (event) => {
        setSelectedRole(event.target.value);
    };

    const renderSignUpComponent = () => {
        switch (selectedRole) {
            case 'Student':
                return <StudentSignUp />;
            case 'Academia':
                return <AcademiaSignUp />;
            case 'Industry':
                return <IndustrySignUp />;
            default:
                return <p>Please select a role from above</p>;
        }
    };

    return (
        <div className='SelectRoleSignUpMain'>
            <div className="profile-pic">
                <img className='ProfileImg' src='Bunny.jpg' alt='A bunnyyy' />
            </div>
            <h2 className="SignUpHeading">
                Select Role
            </h2>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
                <div className="form-check" >
                    <input
                        className="form-check-input"
                        type="radio"
                        name="SelectRoleSignUp"
                        id="RoleStudent"
                        value="Student"
                        checked={selectedRole === 'Student'}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label" htmlFor="RoleStudent">
                        Student
                    </label>
                </div>
                <div className="form-check" style={{ marginLeft: '10px' }}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="SelectRoleSignUp"
                        id="RoleAcademia"
                        value="Academia"
                        checked={selectedRole === 'Academia'}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label" htmlFor="RoleAcademia">
                        Academia
                    </label>
                </div>
                <div className="form-check" style={{ marginLeft: '10px' }}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="SelectRoleSignUp"
                        id="RoleIndustry"
                        value="Industry"
                        checked={selectedRole === 'Industry'}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label" htmlFor="RoleIndustry">
                        Industry
                    </label>
                </div>
            </div>
            <div>
                {renderSignUpComponent()}
            </div>
        </div>
    );
};

export default SelectRole;
