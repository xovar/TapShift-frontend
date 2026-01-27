import React from "react";
import googleIcon from "../../../assets/Google__G__Logo 1.png";
import useAuth from "../../../Hooks/useAuth";

export default function GoogleButton() {

    const {signInWithGoogle} = useAuth();

    const googleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(err => {
            console.log(err)
        })
    }


  return (
    <div onClick={() => googleSignIn()} className="bg-[#E9ECF1] shadow cursor-pointer hover:bg-[#e5efdd] border-none mt-4 text-black flex justify-center items-center py-2">
      <img src={googleIcon} alt="" />
      <h1 className="font-medium text-[14px] ml-2.5 text-black">
        Login with google
      </h1>
    </div>
  );
}
