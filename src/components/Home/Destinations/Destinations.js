import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import './Destination.css'

const Destinations = () => {
    const [destinations,setDestinations]=useState([])
    const history = useHistory()

    // const colors = ['danger','primary','warning','success','info'];
   
 
    
    useEffect(() =>{
        axios('https://ghostly-ghost-80497.herokuapp.com/destinations')
        .then(res=> setDestinations(res.data))
    },[])


    const handleAdded =(id)=>{
        history.push(`tickets/${id}`)
    }
    return (
        <div className="w-77 h-85 mx-auto row">
            <h2 className="text-center pt-5 mt-4">Travel Destination</h2>
            {destinations.length?destinations.map((pd,index)=>{
                return(
               <div key={index} className="col-12 col-md-4 col-lg-4 p-3">
               <Card  className="shadow p-3 mb-5 bg-body rounded" onClick={()=>handleAdded(pd._id)}>
                <Card.Img className="hover-zoom" height="350" variant="top" src={pd.img}
                />
                <Card.Body className="text-black text-center">
                    <Card.Title>{pd.name}</Card.Title>
                    
                    <Button className="glow-on-hover" >Book Now</Button>
                </Card.Body>
                </Card>
               </div>

            )}):
            <Spinner className="text-center" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            }
        </div>
        // <div className="w-75 h-85 mx-auto row">
        //     {destinations.length?destinations.map((pd,index)=>{
        //         return(
        //        <div key={index} className="col-12 col-md-4 col-lg-4 p-3">
        //        <Card bg={colors[Math.ceil(Math.random()*4)]} className="shadow-lg border-0 bg-image hover-zoom" onClick={()=>handleAdded(pd._id)}>
        //         <Card.Img  height="200" variant="top" src={pd.img} />
        //         <Card.Body className="text-white text-center">
        //             <Card.Title>{pd.name}</Card.Title>
                    
        //             <Button variant={colors[Math.ceil(Math.random()*4)]}>Add</Button>
        //         </Card.Body>
        //         </Card>
        //        </div>

        //     )}):
        //     <Spinner className="text-center" animation="border" role="status">
        //         <span className="visually-hidden">Loading...</span>
        //     </Spinner>
        //     }
        // </div>
    );
};

export default Destinations;