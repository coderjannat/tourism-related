import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'

const Destinations = () => {
    const [destinations,setDestinations]=useState([])
    const history = useHistory()

    const colors = ['danger','primary','warning','success','info'];
   
 
    
    useEffect(() =>{
        axios('http://localhost:5000/destinations')
        .then(res=> setDestinations(res.data))
    },[])


    const handleAdded =(id)=>{
        history.push(`destinations/${id}`)
    }
    return (
        <div className="w-75 mx-auto row">
            {destinations.length?destinations.map((pd,index)=>{
                return(
               <div key={index} className="col-12 col-md-4 col-lg-3 p-3">
               <Card bg={colors[Math.ceil(Math.random()*4)]} className="shadow-lg border-0" onClick={()=>handleAdded(pd._id)}>
                <Card.Img height="200" variant="top" src={pd.img} />
                <Card.Body className="text-white text-center">
                    <Card.Title>{pd.name}</Card.Title>
                    
                    <Button variant={colors[Math.ceil(Math.random()*4)]}>Add</Button>
                </Card.Body>
                </Card>
               </div>

            )}):
            <Spinner className="text-center" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            }
        </div>
    );
};

export default Destinations;