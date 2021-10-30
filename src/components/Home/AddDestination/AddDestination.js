import React from 'react';

import { useForm } from "react-hook-form";
import axios from 'axios';



const AddDestination = () => {
   

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
       axios.post('http://localhost:5000/destinations',data)
       .then(res=>{
           if(res.data.insertedId){
               alert('added successful')
               reset()
           }
       })
    //    setPhoto(data.photo[0].name);
    //   console.log(data.photo[0].name);

    };
    return (
        <div className="mt-5">

             



             <form className="d-flex flex-column w-25 border p-4 column-gap-2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
             <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
               

                <input className="my-2 p-2 fs-5 bg-danger text-white border-0" type="submit" />
             </form>
             {/* <h1>this is img</h1>
             <img src={photo} alt="" /> */}
        </div>
    );
};


export default AddDestination;