import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

export default function App() {
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };


    const gender = [
        { value: "1", label: "Male" },
        { value: "2", label: "feMale" },
    ];

    const options = [
        { value: "1", label: "AOT" },
        { value: "2", label: "HXH" },
        { value: "3", label: "GOT" },
    ]

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group">
                    <label>FirstName </label>
                    <input className="form-control" {...register("FirstName", { required: true })} />
                    {errors.FirstName && <span className="text-danger"> This field is required</span>}

                </div>
                <div className="form-group">
                    <label>LastName </label>
                    <input className="form-control" {...register("LastName", { required: true })} />
                    {errors.lastName && <span className="text-danger"> This field is required</span>}

                </div>

                <div className="form-group">
                    <label >Email </label>
                    <input className="form-control" {...register("Email", { required: true })} />
                    {errors.Email && <span className="text-danger"> This field is required</span>}

                </div>
                <div className="form-group">
                    <label >Phone </label>
                    <input className="form-control" {...register("Phone", { required: true })} />
                    {errors.Phone && <span className="text-danger"> This field is required</span>}

                </div>
                <div className="form-group">
                    <label>Password </label>
                    <input className="form-control" {...register("Password", { required: true })} />
                    {errors.Password && <span className="text-danger"> This field is required</span>}
                </div>

                <div className="form-group">
                    <label>Gender </label>
                    <Controller
                        name="Gender"
                        control={control}
                        render={({ field }) => <Select {...field} options={gender} />}
                    />
                </div>

                <div className="form-group">
                    <label>Select Options </label>
                    <Controller
                        name="select"
                        control={control}
                        render={({ field }) => <Select {...field} options={options} isMulti />}
                    />
                </div>

                <input type="submit" onSubmit={onSubmit} />
            </form>
        </div>
    );
}