'use client';
import React from 'react'

const Login = ({setToggleForm}) => {
    const handleRegisterForm = () =>{

        setToggleForm(false);
    }

  
  return (
    <div className="h-[25rem]  min-w-[50vw] grid  grid-cols-2  bg-amber-300  rounded-md">
      <div class="flex flex-col justify-center items-center px-6 py-10 gap-2">
        <h2 className=" text-xl font-semibold ">Hello, Friends</h2>
        <p className="  text-sm w-[30ch] ">
          Enter your personal details and start your journey with us
        </p>
        <button
          class="rounded text-black  bg-slate-50 p-2"
          onClick={handleRegisterForm}
        >
          Register Here
        </button>
      </div>

      <form class="flex flex-col justify-center items-center px-6 py-10 gap-2 bg-slate-50">
        <h2 className=" text-2xl py-3">Sign In</h2>
        <div className="w-56 bg-slate-300 h-[2px] rounded-md my-3"></div>
        <div class="mb-2">
          <input
            type="email"
            placeholder="Enter Email"
            className="bg-slate-50  border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div class="">
          <input
            type="password"
            placeholder="Enter Password"
            className="bg-slate-50  border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div class="mb-2 cursor-pointer text-[10px]  ps-24">Forgot Password ?</div>

        <label htmlFor="submit">
          <input
            type="button"
            value="submit"
            id="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
          />
        </label>
      </form>
    </div>
  )
}

export default Login
