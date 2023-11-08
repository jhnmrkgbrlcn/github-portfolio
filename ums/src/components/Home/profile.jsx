import React, { useState, useRef } from "react";
import defUserImage from "../../asset/defUserImage.png";

function Profile() {
  const [isActive, setIsActive] = useState(true);
  const imageUploadRef = useRef(null);
  const profileImageRef = useRef(null);

  const handleImageClick = () => {
    imageUploadRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        // Update the profile image with the selected image
        profileImageRef.current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="mb-4">
          <h1>USERS</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <img
                ref={profileImageRef}
                src={defUserImage}
                alt="Profile Image"
                style={{ width: 70, cursor: "pointer" }}
                onClick={handleImageClick}
              />
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                ref={imageUploadRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
            <div className="col-10">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    marginRight: 5,
                    backgroundColor: isActive ? "green" : "red",
                  }}></div>
                {isActive ? "Active" : "Inactive"}
              </div>
              <p style={{ margin: "5px 0" }}>FullName</p>
              <p style={{ margin: "5px 0" }}>User</p>
            </div>
            <div className="col-1">
              <div className="d-flex flex-column">
                <button
                  type="button"
                  className="btn btn-primary btn-block mb-2">
                  UPDATE
                </button>
                <button type="button" className="btn btn-primary btn-block">
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col rounded shadow" style={{ margin: "5px" }}>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>Name</li>
                <li>StudNum</li>
                <li>Program</li>
              </ul>
            </div>
            <div className="col rounded shadow" style={{ margin: "5px" }}>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>Address</li>
                <li>PhoneNumber</li>
                <li>EmailAddress</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
