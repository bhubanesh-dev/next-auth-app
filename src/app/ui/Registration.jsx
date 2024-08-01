'use client';

import React,{useState} from 'react'
import { FaGoogle,FaFacebook,FaGithub } from "react-icons/fa6";

const Registration = ({setToggleForm}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      // Update form data when input fields change
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      // State to manage the visibility of OTP input field
      const [showOtpInput, setShowOtpInput] = useState(false);
    
      // Handle form submission on email submission
      const handleEmailSubmit = (event) => {
        event.preventDefault();
        
        const { name, email, password } = formData;
    
        // Validate if all fields are filled
        if (!name || !email || !password) {
          console.log("One or more fields are blank");
        }
    
        // Email validation regex pattern
        const emailPattern = /^(?!^\.)[^\s@]+@(?!.*\.\.)[^\s@]+\.[^\s@]+$/;
    
        if (emailPattern.test(email)) {
          // Call BE API for further processing
          // Show OTP Field
          
          setTimeout(() => setShowOtpInput(true), 5000);
 
        } else {
          alert("Invalid email format");
        }
      };
    
      // Handle OTP submission
      const onOtpSubmit = (otp) => {
        console.log("Login Successful", otp);
      };
    
      // Switch to login form
      const handleRegisterForm = () => {
        setToggleForm(true);
      };
    
  return (
    <> <div className="h-[25rem]  min-w-[50vw] grid  grid-cols-2 bg-blue-300 rounded">
        <div class="flex flex-col justify-center items-center px-6 py-10 gap-2">
          <h2 className=" text-xl font-semibold">Welcome Back !</h2>
          <p className=" text-sm w-[30ch]">
            To keep connected with us please login with your personal info
          </p>
          <button
            class="rounded text-black text-sm bg-slate-50 p-2"
            onClick={handleRegisterForm}
          >
            Login Here
          </button>
        </div>
        {!showOtpInput ? (
          <form
            class="flex flex-col justify-center items-center px-6 py-8 gap-2 bg-slate-50"
            onSubmit={handleEmailSubmit}
          >
            <h2 className=" text-2xl py-1">Create Account</h2>
            <div className="flex flex-row gap-3">
              <FaGoogle className='h-5 w-auto text-slate-900'/>
              <FaFacebook className='h-5 w-auto' />
              <FaGithub  className='h-5 w-auto'/>
            </div>
            <div className="w-56 bg-slate-300 h-[2px] rounded-md my-3"></div>
            <div class="mb-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-slate-50  border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-2">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="bg-slate-50  border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="mb-2">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="bg-slate-50  border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
    
            <input
              type="submit"
              value="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            />
          </form>
        ) : (
          <div className=" h-[inherit] relative flex flex-col justify-center items-center px-6 py-10 gap-2 bg-slate-50 text-back">
            <div
              className="absolute top-5 left-5 cursor-pointer"
              onClick={(e) => {
                !setShowOtpInput();
              }}
            >
              <span className="rotate-180">&#10143; </span>Back
            </div>
            <div className="text-xl font-ubuntu"> Check your email for OTP</div>
            {/* <OtpInput
              length={4}
              onOtpSubmit={onOtpSubmit}
              setDisplayArea={setShowOtpInput}
            /> */}
          </div>
        )}
      </div>
          
        </>
  )
}

export default Registration
