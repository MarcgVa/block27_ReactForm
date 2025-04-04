import React, { useState } from 'react'

const SignUp = ({setToken}) => {

  const API_URL = "https://fsa-jwt-practice.herokuapp.com/"
  const [errorMsg, setErrorMsg] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      if (json.success) {
        setToken(json.token);
        console.log(json.token);
      };
      if (json.error) {
        throw new Error(json.error.message);
      }
    } catch (err) {
      setErrorMsg(err.message);
      console.error(err.message);
    }
  }

  const handleUpdate = (e) => {
    setFormData((prevValue) => ({
      ...prevValue, [e.target.name]: e.target.value,
    }));
  };



 
 return (
   <div className="space-y-12">
     <div className="border-5 border-blue-700/10 justify-center m-20 pb-12">
       <h2 className="font-bold text-center p-2 mt-5 mx-20 rounded-md bg-linear-to-r from-blue-500 to-pink-500 px-2 text-white">
         SignUp
       </h2>
       <form onSubmit={handleSubmit} className="my-4 mx-20">
         <div className="mt-5 flex-col gap-x-6 gap-y-8 sm:grid-cols-6">
           <div className="sm:col-span-4">
             <label
               htmlFor="username"
               className="block text-sm/6 font-md text-gray-900 font-semibold"
             >
               Username
             </label>
             <div className="mt-2">
               <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                 <input
                   type="email"
                   name="email"
                   autoComplete="new-email"
                   className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                   placeholder="email"
                   value={formData.email}
                   onChange={handleUpdate}
                 />
               </div>
             </div>
           </div>
           <div className="sm:col-span-4">
             <label
               htmlFor="password"
               className="block text-sm/6 font-md text-gray-900 font-semibold mt-5"
             >
               Password
             </label>
             <div className="mt-2">
               <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                 <input
                   type="password"
                   name="password"
                   autoComplete="new-password"
                   className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                   placeholder="password"
                   value={formData.password}
                   onChange={handleUpdate}
                 />
               </div>
             </div>
           </div>
         </div>
         <div className="flex justify-center">
           <button
             className="border rounded-full px-4 mt-10 border-blue-500 text-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white active:bg-blue-700 focus-visible:outline-blue-700"
             type='submit'
           >
             Sign Up
           </button>
         </div>
       </form>
       <h2>
         <p className="text-red-800 text-center">
           {errorMsg !== null ? errorMsg : null}
         </p>
       </h2>
     </div>
   </div>
 );
}

export default SignUp