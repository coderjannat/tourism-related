import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from 'axios';



const AllTickets = () => {
    const [volunteer, setVounteer] = useState([]);
    const [users, setUsers] = useState([]);
    const [smShow, setSmShow] = useState(false);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/alltickets")
            .then((res) => res.json())
            .then((data) => setVounteer(data));
    }, []);



    const handleDelete = (id) => {
        const checker = window.confirm('Are you sure to delete?')
        if (checker) {
            console.log(id);
            axios.delete(`http://localhost:5000/deletetickets/${id}`)
                .then(backend => {
                    if (backend.data) {

                        setSmShow(true)
                        alert('deleted')
                        const rest = users.filter(item => item._id !== id);
                        setUsers(rest)

                    }

                })
        }
    }





    return (
        <div>
            <h1>All Tickets {volunteer?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {volunteer?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.date}</td>
                           
                            <button className="btn bg-danger p-2" onClick={() => handleDelete(pd._id)}>Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default AllTickets;

