import React, { useState } from "react";

import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

const MyTickets = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:5000/mytickets/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setEvents(data));
    }, [user.email]);
  
    console.log(events);
    console.log(events);
    return (
      <div>
        <h1>Total Tickets : {events.length}</h1>
        <h1>Total Tickets : {user.description}</h1>
        <h1>user : {user.email}</h1>
      </div>
    );
  };

export default MyTickets;