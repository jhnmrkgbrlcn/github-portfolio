import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./userReg.css";

const UserRegistration = () => {
  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [BirthDate, setBirthDate] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");

  const [UserName, setUserName] = useState("");
  const [EmailAdd, setEmailAdd] = useState("");
  const [Role, setRole] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [NewPassw, setNewPassw] = useState("");
  const [ConfPassw, setConfPassw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
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
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">USER REGISTRATION</h1>

      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <div className="row">
          <div className="col-md-3">
            <h6>
              <b>Name</b>
            </h6>
            <label htmlFor="FirstName">First Name:</label>
            <input
              type="text"
              id="FirstName"
              className="form-control"
              required
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <br />
            <label htmlFor="MiddleName">Middle Name:</label>
            <input
              type="text"
              id="MiddleName"
              className="form-control"
              required
              value={MiddleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <h6>
              <b>Birthdate</b>
            </h6>
            <label htmlFor="BirthDate">Day of Birth:</label>
            <input
              type="date"
              id="BirthDate"
              className="form-control"
              required
              value={BirthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <h6>
              <b>Gender</b>
            </h6>
            <label htmlFor="Gender">Sex:</label>
            <select
              id="Gender"
              className="form-control"
              required
              value={Gender}
              onChange={(e) => setGender(e.target.value)}>
              <option value="ChooseGender">--Choose Gender--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4">
            <label htmlFor="LastName">Last Name:</label>
            <input
              type="text"
              id="LastName"
              className="form-control"
              required
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="col-md-8">
            {/* <h6>Address</h6> */}
            <label htmlFor="Address">
              <b>Address</b>
            </label>
            <input
              type="text"
              id="Address"
              className="form-control"
              required
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <h2>Account Information</h2>
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="UserName">
              <b>Username:</b>
            </label>
            <input
              type="text"
              id="UserName"
              className="form-control"
              required
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="EmailAdd">
              <b>Email Address:</b>
            </label>
            <input
              type="text"
              id="EmailAdd"
              className="form-control"
              required
              value={EmailAdd}
              onChange={(e) => setEmailAdd(e.target.value)}
            />
          </div>

          {/* <div className="row mt-3"> */}
          <div className="col-md-3">
            <label htmlFor="Role">
              <b>Role:</b>
            </label>
            <select
              id="Role"
              className="form-control"
              required
              value={Role}
              onChange={(e) => setRole(e.target.value)}>
              <option value="ChooseRole">--Choose Role--</option>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="ContactNo">
              <b>Contact No:</b>
            </label>
            <input
              type="number"
              id="ContactNo"
              className="form-control"
              required
              value={ContactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </div>
          {/* </div> */}
        </div>

        <h6>
          <b>Password</b>
        </h6>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="NewPassw">New Password:</label>
            <input
              type="password"
              id="NewPassw"
              className="form-control"
              required
              value={NewPassw}
              onChange={(e) => setNewPassw(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="ConfPassw">Confirm Password:</label>
            <input
              type="password"
              id="ConfPassw"
              className="form-control"
              required
              value={ConfPassw}
              onChange={(e) => setConfPassw(e.target.value)}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="d-flex justify-content-end">
            <div className="col-md-4  text-right">
              <button type="reset" className="btn btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary ml-2">
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
