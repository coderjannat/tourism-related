import React, { useEffect, useState } from "react";
import "./Tickets.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

const Tickets = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState({})
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://ghostly-ghost-80497.herokuapp.com/destinations/${id}`)
      .then(res => res.json())
      .then(data => setDestination(data))
  }, [])
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {


    axios.post('https://ghostly-ghost-80497.herokuapp.com/tickets', data)
      .then(res => {
        if (res) {
          alert('added successful')
          reset()
        }
      })
    history.push("/adminDashboard")
  };
  return (
    <>
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row className="p-4">
          <Col xs={12} md={5}>
          <div classNameName="w-75  mx-auto">
          <Card.Title>{destination.name}</Card.Title>
            <Card.Img  className="img-thumbnail" variant="top" src={destination.img} />

            {/* <Image src={destination.img} thumbnail /> */}

            <Card.Body>
              
              <Card.Title>Cost:{destination.price}</Card.Title>
              <Card.Text>
              
              {destination.description}
              </Card.Text>
            </Card.Body>
            </div>
          </Col>
          <Col xs={12} md={7}>
            {/* <div classNameName="login-box w-25 m-auto mt-5">
              <div classNameName="event-box border border d-flex justify-content-center align-items-center">
                <div classNameName="login-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      {...register("name")}
                      defaultValue={user.displayName}
                      placeholder="Name"
                      classNameName="p-2 m-2"
                      readOnly
                    />
                    <br />

                    <input
                      {...register("email", { required: true })}
                      placeholder="Email"
                      defaultValue={user.email}
                      classNameName="p-2 m-2"
                      readOnly
                    />
                    <br />
                    
                    <input classNameName="my-2 p-2 fs-5" type="date" {...register("date")} />
                    <br />
                    <input
                      {...register("description", { required: true })}
                      placeholder="Description"
                      classNameName="p-2 m-2"
                    />
                    <br />
                    <input
                      {...register("books", { required: true })}
                      placeholder="Organize books"
                      classNameName="p-2 m-2"
                    />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input  type="submit" classNameName="btn btn-info w-50" />
                  </form>
                  <p classNameName="m-2 mb-2">
                    already have account?{" "}
                    <Link to="/login">
                      <span classNameName="text-danger">create account</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div> */}
              <div>
      <h1 className="mt-5 text-center text-info">
        Please Book for your Tickets
      </h1>
      <div className="login-box w-25 m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                defaultValue={user.displayName}
                placeholder="Name"
                className="p-2 m-2"
                readOnly
              />
              <br />

              <input
                {...register("email", { required: true })}
                placeholder="Email"
                defaultValue={user.email}
                className="p-2 m-2"
                readOnly
              />
              <br />
              {/* <input
                {...register("date", { required: true })}
                placeholder="date"
                defaultValue={new Date()}
                className="p-2 m-2"
              /> */}
              <input className="m-2 p-2  fs-6" type="date" {...register("date")} />
              <br />
              <input type="number"
                {...register("price", { required: true })}
                placeholder="price"
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("place", { required: true })}
                placeholder="place"
                className="p-2 m-2"
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" className="btn btn-info w-50 m-2" />
            </form>
            <p className="m-2 mb-2">
              already have account?{" "}
              <Link to="/login">
                <span className="text-danger">create account</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tickets;