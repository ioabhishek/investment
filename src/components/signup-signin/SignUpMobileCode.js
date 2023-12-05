import React from 'react'

const SignUpMobileCode = () => {
   return (
      <div className="max-w-7xl min-h-screen mx-auto flex flex-col items-center justify-center">
         <form className="max-w-sm w-full bg-cs200 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-2  text-center text-white" >Verify Account</h2>
            <div className="text-cs600 text-sm text-center mb-10">Enter 4 digit code we have sent to <span className='text-cs600 text-sm font-semibold'>+917000434296</span></div>

            <div className="mb-6 flex">
               <input type="text" id="digit1" name="digit1" className="w-full text-center text-lg text-cs100 font-semibold px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 mx-1"/>
            </div>

            <div className="text-cs600 text-sm text-center mb-0">Haven't received notification code?</div>
            <div className=' text-sm font-semibold underline text-center mb-10 text-cp100'>Resend Code</div>

            <button className="w-full bg-cp100 text-white  font-semibold py-2 rounded-lg mb-4">
               Verify Code
            </button>
         </form>
      </div>   
   )
}

export default SignUpMobileCode