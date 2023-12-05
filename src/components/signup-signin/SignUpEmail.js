import React from 'react'

const SignUpEmail = () => {
   return (
      <div className="max-w-7xl min-h-screen mx-auto flex flex-col items-center justify-center">
         <div className="max-w-sm w-full bg-cs200 p-8 rounded-xl shadow-lg">
            <form className="">
               <h2 className="text-3xl font-bold mb-10  text-center text-white" >Welcome!</h2>

               <div className="mb-4">
                  <label for="name" className="block text-cs600 text-sm font-regular mb-2">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter yout name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"/>
               </div>

               <div className="mb-4">
                  <label for="email" className="block text-cs600 text-sm font-regular mb-2">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email id" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"/>
               </div>

               <div className="mb-6">
                  <label for="password" className="block text-cs600 text-sm font-regular mb-2">Password</label>
                  <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"/>
               </div>

               <div for="terms" className="text-gray-600 text-sm text-left mb-10 flex items-center">
                  <input type="checkbox" className='mr-2'/>
                  <p className='text-white text-sm'>I agreed to the <a href="#" className="text-cp200 underline">Terms and Conditions</a></p>
               </div>

               <button className="w-full bg-cp100 text-white font-semibold py-2 rounded-lg mb-4">
                  Sign Up
               </button>
            </form>
            <button className="w-full text-white py-2 font-semibold rounded-lg border border-cp100 mb-4" >
               With Phone Number
            </button>
            <div className=' text-xs text-white text-center'>Already have an account? <a href="" className=" font-semibold text-cp100">Login</a></div>
         </div>
      </div>   
   )
}

export default SignUpEmail