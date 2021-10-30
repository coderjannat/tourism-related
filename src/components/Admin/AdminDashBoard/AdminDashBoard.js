import React, { useState } from "react";

import "./AdminDashboard.css";
// import Events from "./../../Events/Events";

import AllTickets from "../../AllTickets/AllTickets";
import MyTickets from "../../My Tickets/MyTickets";


const AdminDashBoard = () => {
  const [control, setControl] = useState("alltickets");

  console.log(control);
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-1">
                <h6>Dashboard</h6>
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("alltickets")}
                    className="admin-menu p-2"
                  >
                    All Tickets
                  </li>
                   <li
                    onClick={() => setControl("mytickets")}
                    className="admin-menu p-2"
                  >
                   My Tickets
                  </li>
                  {/*<li
                    onClick={() => setControl("allEvents")}
                    className="admin-menu p-2"
                  >
                    Manage Events
                  </li> */}
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              {control === "alltickets" && <AllTickets></AllTickets>}
              {control === "mytickets" && <MyTickets></MyTickets> }
              {/* {control === "addEvents" && <AddEvents></AddEvents>} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;