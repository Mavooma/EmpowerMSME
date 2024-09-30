// src/components/Dashboard.js
import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <h2>Business Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3>Revenue</h3>
              <p>$50,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3>Products Sold</h3>
              <p>120</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3>New Customers</h3>
              <p>45</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
