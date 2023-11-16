import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const SettingsCard = () => {
  return (
    <div className="container mt-5 align-items-center">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Change Password</h5>
        </div>
        <div className="card-body">
          <div className="form-group row-md-3">
            <label className="form-label" htmlFor="currentPassword">
              Current Admin Password:
            </label>
            <input
              type="password"
              id="currentPassword"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="newPassword">
              New Admin Password:
            </label>
            <input
              type="password"
              id="newPassword"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="confirmPassword">
              Confirm Admin Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control form-control-lg"
            />
          </div>

          <div className="row">
            <button className="btn btn-primary col-2">Save</button>
            <button className="btn btn-primary col-2">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;