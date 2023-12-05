import React from 'react'

const SignUpMobile = () => {
   return (
      <div className="max-w-7xl min-h-screen mx-auto flex flex-col items-center justify-center">
         <form className="max-w-sm w-full bg-cs200 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-1  text-center text-white" >Your Phone Number</h2>
            <div className="text-cs600 text-sm text-center mb-8">Enter your mobile number to Login/Register</div>

            <div className="flex mb-4">
               <div className="mr-2 w-1/4">
                  <select id="countryCode" name="countryCode" className="w-full h-10 px-3 py-2 border rounded-md focus:outline-none focus:border-light-green">
                     <option value="+1">+1</option>
                     <option value="+44">+44</option>
                     <option value="+91">+919</option>
                  </select>
               </div>
               <div className="flex-1">
                  <input type="tel" id="phoneNumber" name="phoneNumber" placeholder='Enter your mobile number' className="w-full h-10 px-3 py-2 border rounded-md focus:outline-none focus:border-light-green"/> 
               </div>
            </div>


            <button className="w-full h-10 bg-cp100 font-semibold text-white py-2 rounded-lg mb-4">
               Send Code
            </button>
            <div className=' text-xs text-white text-center mb-4' >OR</div>
            <button className="w-full h-10 text-white font-semibold py-2 rounded-lg border border-cp100 mb-4">
               Sign Up With Email
            </button>
            <div className=' text-xs text-white text-center'>Already have an account? <a href="" className="opacity-100 font-semibold text-cp200">Signin</a></div>
         </form>
      </div>   
   )
}

export default SignUpMobile