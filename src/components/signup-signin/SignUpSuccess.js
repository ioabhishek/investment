import React from 'react'

const SignUpSuccess = () => {
   return (
      <div className="max-w-7xl min-h-screen mx-auto flex flex-col items-center justify-center">
         <form className="max-w-sm w-full bg-cs200 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-2  text-center text-white" >Account Created</h2>
            <div className="text-cs600 text-sm text-center mb-8">Your account has been created successfully. Press continue to start using the website.</div>
         
            <button className="w-full bg-cp100 text-white  font-semibold py-2 rounded-lg mb-2">
               Continue
            </button>

            <div className="text-cs600 text-xs text-center mb-2">By clicking continue you agree to our <br /> <a href="#" className="text-cp100 underline">Terms and Conditions</a> </div>
         </form>
      </div>   
   )
}

export default SignUpSuccess