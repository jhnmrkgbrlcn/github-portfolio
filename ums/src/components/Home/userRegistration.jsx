import React, { useState } from 'react'
import "./userReg.css"

const UserRegistration = () => {
    const [FirstName, setFirstName] = useState('');
    const [MiddleName, setMiddleName] = useState('');
    const [LastName, setLastName] = useState('');
    const [BirthDate, setBirthDate] = useState('');
    const [Gender, setGender] = useState('');
    const [Address, setAddress] = useState('');

    const [UserName, setUserName] = useState('');
    const [EmailAdd, setEmailAdd] = useState('');
    const [Role, setRole] = useState('');
    const [ContactNo, setContactNo] = useState('');
    const [NewPassw, setNewPassw] = useState('');
    const [ConfPassw, setConfPassw] = useState('');

    const handleSubmit = (e) => {
        console.log({
            FirstName,
            MiddleName,
            LastName,
            BirthDate,
            Gender,
            Address,
            UserName,
            EmailAdd,
            Role,
            ContactNo,
            NewPassw,
            ConfPassw,
        });
    }



  return (
    <div >
        <h1>USER REGISTRATION</h1>
        
    <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2> 
        <div>
            <h6>Name</h6>
            <h6>Birthdate</h6>
            <h6>Gender</h6>
        </div>
        <div>
            <label htmlFor="FirstName">First Name:</label>
            <label htmlFor="MiddleName">Middle Name:</label>
            <label htmlFor="BirthDate">Day of Birth:</label>
            <label htmlFor="Gender">Sex:</label>
        </div>
        <div>
            <input type="text" id="FirstName" required value={FirstName} onChange={(e) => setFirstName(e.target.value)} />

            <input type="text" id="MiddleName" required value={MiddleName} onChange={(e) => setMiddleName(e.target.value)} />

            <input type="date" id="BirthDate" required value={BirthDate} onChange={(e) => setBirthDate(e.target.value)} />

            <select id="Gender" required value={Gender} onChange={(e) => setGender(e.target.value)} >
                <option value="ChooseGender">--Choose Gender--</option> 
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select><br />
        </div>
        <div>
            <label htmlFor="LastName">Last Name:</label>
            <h6>Address</h6>
        </div>
        <div>      
            <input type="text" id="LastName" required value={LastName} onChange={(e) => setLastName(e.target.value)} />
            {/* <label htmlFor="Address">Address:</label> */}
            <input type="text" id="Address" required value={Address} onChange={(e) => setAddress(e.target.value)} /><br />
        </div>

        <h2>Account Information</h2>
        <div>
            <label htmlFor="UserName">Username:</label>
            <label htmlFor="EmailAdd">Email Address:</label>
            <label htmlFor="Role">Role:</label>
            <label htmlFor="ContactNo">Contact No:</label>
        </div>
        <div>
            <input type="text" id="UserName" required value={UserName} onChange={(e) => setUserName(e.target.value)} /><br />

            <input type="text" id="EmailAdd" required value={EmailAdd} onChange={(e) => setEmailAdd(e.target.value)} /><br />

            <select id="Role" required value={Role} onChange={(e) => setRole(e.target.value)}>
                <option value="ChooseRole">--Choose Role--</option> 
                <option value="Student">Student</option> 
                <option value="Admin">Admin</option>      
            </select> <br />

            <input type="number" id="ContactNo" required value={ContactNo} onChange={(e) => setContactNo(e.target.value)} /><br />
        </div>

        <h6>Password</h6>
        <div>
            <label htmlFor="NewPassw">New Password:</label>
            <label htmlFor="ConfPassw">Confirm Password:</label> 
        </div>
        <div>
            <input type="password" id="NewPassw" required value={NewPassw} onChange={(e) => setNewPassw(e.target.value)} /><br />
            <input type="password" id="ConfPassw" required value={ConfPassw} onChange={(e) => setConfPassw(e.target.value)} /><br />
        </div>
        <button type="reset">Cancel</button>
        <button type="submit">Register</button>
    </form>
    </div>
  )
}

export default UserRegistration;