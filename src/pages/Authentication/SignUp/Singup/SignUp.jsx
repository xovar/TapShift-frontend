import React from 'react'
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';
import GoogleButton from '../../../shared/GoogleButton/GoogleButton';
import { Link } from 'react-router';

export default function SignUp() {
    const { register, handleSubmit } = useForm();

    const {signUp} = useAuth();
    
      const onSubmit = (data) => {
        console.log(data);
        signUp(data.email,data.password)
        .then(result => {
          console.log(result.user);
        }).catch(error => {
          console.log(error)
        })
      };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="w-[384px]">
      <div className="mb-5">
        <h1 className="font-extrabold text-[42px] text-black">
        Create an Account
        </h1>
        <p className="font-medium text-[16px] text-black">
          Sign Up with TapShift
        </p>
      </div>
      <fieldset className="fieldset ">
      <label className="font-medium tex-[14px] text-black">Name</label>
        <input
          type="text"
          {...register("name", { required: true })}
          className="placeholder:font-normal focus:bg-white font-normal rounded placeholder:text-[16px] text-[16px]  placeholder:text-[#94A3B8] text-[#94A3B8] bg-white border border-[#94A3B8] py-2 pl-3.5"
          placeholder="Name"
        />

        <label className="font-medium tex-[14px] text-black">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="placeholder:font-normal focus:bg-white font-normal rounded placeholder:text-[16px] text-[16px]  placeholder:text-[#94A3B8] text-[#94A3B8] bg-white border border-[#94A3B8] py-2 pl-3.5"
          placeholder="Email"
        />

        <label className="font-medium tex-[14px] text-black">Password</label>
        <input
          type="password"
          {...register("password", { required: true })}
          className="placeholder:font-normal select:bg-white  font-normal rounded placeholder:text-[16px] text-[16px]  placeholder:text-[#94A3B8] text-[#94A3B8] bg-white border border-[#94A3B8] py-2 pl-3.5"
          placeholder="Password"
        />
        <button type="submit" className="btn bg-[#CAEB66] hover:bg-[#6dc86d] border-none mt-4 text-black">
          Sign Up
        </button>
        <h1 className="text-[16px] font-normal text-[#71717A] mt-3">
          Already Have An Account?{" "}
          <Link to="/login" className="text-[#8FA748]">Login</Link>
        </h1>
        <GoogleButton/>
      </fieldset>
    </div>
  </form>
  )
}
