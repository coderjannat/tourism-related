import React from "react";
import "./Tickets.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from 'axios';

const Tickets = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // fetch("http://localhost:5000/tickets", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => console.log(result));
    // console.log(data);
    axios.post('http://localhost:5000/tickets',data)
       .then(res=>{
           if(res){
               alert('added successful')
               reset()
           }
       })
  };
  return (
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
              <input className="my-2 p-2 fs-5" type="date" {...register("date")} />
              <br />
              <input
                {...register("description", { required: true })}
                placeholder="Description"
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("books", { required: true })}
                placeholder="Organize books"
                className="p-2 m-2"
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" className="btn btn-info w-50" />
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
  );
};

export default Tickets;