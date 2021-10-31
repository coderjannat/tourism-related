import React, { useState } from "react";

import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

const MyTickets = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    useEffect(() => {
      fetch(`https://ghostly-ghost-80497.herokuapp.com/mytickets/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setEvents(data));
    }, [user.email]);
  
    console.log(events);
    console.log(events);
    return (
      <div>
        <h1 className="text-decoration-underline pb-3 pt-5">Ticket Details</h1>
        <h3>Total Tickets : {events.length}</h3>
        <h3>Total Tickets : {user.description}</h3>
        <h3>user : {user.email}</h3>
      </div>
    );
  };

export default MyTickets;