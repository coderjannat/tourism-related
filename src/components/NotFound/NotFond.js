import React from 'react';
import { Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import img from '../../img/404.png';
import Container from 'react-bootstrap/Container';
import './NotFound.css';

const NotFound = () => {
    return (
 <Container>
       
        <div className="text-center">
        <Link to="/"> <Button variant="outline-success mt-5 ps-5 pe-5" size="lg">Go Back</Button>{' '}</Link>
        </div>
        <div className="ps-2">
        <img style={{ width: '90%' }} src={img} alt="" />
        </div>
         </Container>
   );

};

export default NotFound;