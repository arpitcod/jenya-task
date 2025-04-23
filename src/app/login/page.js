"use client";

import Link from "next/link";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setUserData } from "@/redux/userSlice";

const LoginPage = () => {
   const [user,setUser] = useState({

              username:"",
              password:""
          })
  
  const disPatch = useDispatch()
          const handleSubmit = async (e) =>{
            e.preventDefault()
            try {
                const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
                // credentials: 'include' // Include cookies (e.g., accessToken) in the request
              })  
              const data = await response.json()
              
              if (response.ok) {
                disPatch(
                  setUserData({
                  user:data,
                  token:data.token
                })),
                alert("login success"),
              localStorage.setItem("test_token",data.token),
              console.log(data);
                
              }else{
                alert("Invalid credentials. Please try again.");
                return;
              }
                  

            } catch (error) {
              console.log(error);
              
            }
            
          }
          const handleOnChange = (e) =>{
            const {name,value} = e.target
            setUser((prev) =>({...prev,[name]:value}))
          }

          const [showPass,setShowPass] = useState(false)
          const handleShowPass = () =>{
            setShowPass(!showPass)
          }
  return (
    <div className="border h-screen flex items-center justify-center bg-gray-100 p-2">
      <form className="border p-5 w-[500px] rounded-md bg-white shadow-lg" onSubmit={handleSubmit}>
        <p className="font-medium text-3xl text-center py-2">Login</p>
        <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
            <label>Username</label>
            <input
              type="text"
              placeholder={"Enter Username:"}
              className="border py-3 px-2 rounded-md"
              value={user?.username}
              onChange={handleOnChange}
              name="username"
            />
          </div>
            <div className="flex flex-col gap-1">
                <label>Password</label>
                <div className="border rounded-md flex">
                    <input
                      type={`${showPass ? "text" :"password"}`}
                      placeholder={"Enter Password:"}
                      className="border-none outline-none py-3 px-2 rounded-md w-full"
                      value={user?.password}
                      onChange={handleOnChange}
                      name="password"
                    />
                      <button type="button" onClick={handleShowPass} className="mx-2 text-2xl cursor-pointer"> {showPass ?<IoMdEyeOff /> :<IoEye />}</button>
                </div>
            </div>
            <div className="mt-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-blue-50 py-2 px-4 rounded-md w-full cursor-pointer font-medium">
                Login
                </button>
            </div>
            <div>
                <p className="text-center">Not Register ? Please <Link className="text-blue-600 font-medium" href={'/register'}>Register</Link></p>
            </div>
        </div>
      </form>
    </div>
  )
}

export default LoginPage