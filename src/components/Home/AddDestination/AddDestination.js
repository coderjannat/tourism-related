import React from 'react';

import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router-dom'


const AddDestination = () => {

    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://ghostly-ghost-80497.herokuapp.com/destinations', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successful')
                    reset()
                }
            })
        history.push("/home")
        //    setPhoto(data.photo[0].name);
        //   console.log(data.photo[0].name);

    };
    return (
        <div className="mt-5">



            <h1 className="text-center">Add Your Favourite Destination</h1>

            <form className="d-flex flex-column w-50 border p-4 column-gap-2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <br />
                <textarea {...register("description")} placeholder="Description" />
                <br />
                <input type="number" {...register("price")} placeholder="price" />
                <br />
                <input {...register("img")} placeholder="image url" />
                <br />

                <input className="my-2 p-2 fs-5 bg-warning text-white border-0" type="submit" />
            </form>
            {/* <h1>this is img</h1>
             <img src={photo} alt="" /> */}
        </div>
    );
};


export default AddDestination;