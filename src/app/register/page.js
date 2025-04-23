"use client";
import { setUserData } from "@/redux/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const disPatch = useDispatch()
  const router = useRouter()

  // submit data 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("register success")
    // disPatch(setUserData(user))
    router.push("/login")
    console.log(user);
  };

  // onchange 
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  //  show passs 
  const [showPass,setShowPass] = useState(false)
  const handleShowPass = () =>{
    setShowPass(!showPass)
  }
  return (
    <div className="border h-screen flex items-center justify-center bg-gray-100 p-2">
      <form
        className="border p-5 w-[500px] rounded-md bg-white shadow-lg"
        onSubmit={handleSubmit}
      >
        <p className="font-medium text-3xl text-center py-2">Register</p> 
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label>Username</label>
            <input
              type="text"
              placeholder={"Enter Username:"}
              className="border py-3 px-2 rounded-md"
              value={user.username}
              onChange={handleOnChange}
              name="username"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="email"
              placeholder={"Enter Email:"}
              className="border py-3 px-2 rounded-md"
              value={user.email}
              onChange={handleOnChange}
              name="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <div className="border rounded-md flex">
              <input
                type={`${showPass ? "text" : "password"}`}
                placeholder={"Enter Password:"}
                className="border-none outline-none py-3 px-2 rounded-md w-full"
                value={user.password}
                onChange={handleOnChange}
                name="password"
              />
              <button
                type="button"
                onClick={handleShowPass}
                className="mx-2 text-2xl cursor-pointer"
              >
                {" "}
                {showPass ? <IoMdEyeOff /> : <IoEye />}
              </button>
            </div>
          </div>
          <div className="mt-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-blue-50 py-2 px-4 rounded-md w-full cursor-pointer font-medium">
              Register
            </button>
          </div>
          <div>
            <p className="text-center">
              Already Register? Please{" "}
              <Link className="text-blue-600 font-medium" href={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
