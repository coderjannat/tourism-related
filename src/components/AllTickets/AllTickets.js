import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { RiDeleteBin5Line } from 'react-icons/ri';



const AllTickets = () => {
    const [volunteer, setVounteer] = useState([]);
    const [users, setUsers] = useState([]);
    const [smShow, setSmShow] = useState(false);
    const [control, setConrol] = useState(false);
    const history = useHistory();
    

    useEffect(() => {
        fetch("https://ghostly-ghost-80497.herokuapp.com/alltickets")
            .then((res) => res.json())
            .then((data) => setVounteer(data));
    }, []);



    const handleDelete = (id) => {
        const checker = window.confirm('Are you sure to delete?')
        if (checker) {
            console.log(id);
            axios.delete(`https://ghostly-ghost-80497.herokuapp.com/deletetickets/${id}`)
                .then(backend => {
                    if (backend.data) {

                        setSmShow(true)
                        alert('deleted')
                        const rest = users.filter(item => item._id !== id);
                        setUsers(rest)
                    }
                   
                      

                })
        }
        history.push("/home")
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
                           
                            <button variant="outline-light" className=" p-2" onClick={() => handleDelete(pd._id)}><RiDeleteBin5Line size={25} className="ms-2"/> Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default AllTickets;

