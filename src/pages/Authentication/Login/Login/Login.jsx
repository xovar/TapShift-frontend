import React from "react";
import { useForm } from "react-hook-form";
import GoogleButton from "../../../shared/GoogleButton/GoogleButton";
import { Link } from "react-router";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[384px]">
        <div className="mb-5">
          <h1 className="font-extrabold text-[42px] text-black">
            Welcome Back
          </h1>
          <p className="font-medium text-[16px] text-black">
            Login with TapShift
          </p>
        </div>
        <fieldset className="fieldset ">
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
          <h1 className="font-normal text-[16px] text-[#94A3B8] cursor-pointer underline my-3">
            Forget Password?
          </h1>
          <button type="submit" className="btn bg-[#CAEB66] hover:bg-[#6dc86d] border-none mt-4 text-black">
            Login
          </button>
          <h1 className="text-[16px] font-normal text-[#71717A] mt-3">
            Don't have any account?{" "}
            <Link to="/signup" className="text-[#8FA748]">Register</Link>
          </h1>
          <GoogleButton/>
        </fieldset>
      </div>
    </form>
  );
}
