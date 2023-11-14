import React, { useState } from "react";

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = () => {
    // Perform password change logic here
    if (currentPassword && newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        // Implement your password change logic here
        // For simplicity, let's just log the changes
        console.log("Password changed successfully!");
        setMessage("Password changed successfully!");
      } else {
        setMessage("New password and confirm password do not match.");
      }
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  return (
    <>
      <div className="content-wrapper">
        <h2>Change Password</h2>
        <div>
          <label>Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={handleChangePassword}>Change Password</button>
        <p>{message}</p>
      </div>
    </>
  );
};

export default Settings;
