import React from 'react'

const SignUp = () => {





 
 return (
   <div className="space-y-12">
     <div className="border-5 border-blue-700/10 justify-center m-20 pb-12">
       <h2 className="font-bold text-center p-2 mt-5 mx-20 rounded-md bg-linear-to-r from-blue-500 to-pink-500 px-2 text-white">
         SignUp
       </h2>
       <form action="" className="my-4 mx-20">
         <div className="mt-5 flex-col gap-x-6 gap-y-8 sm:grid-cols-6">
           <div className="sm:col-span-4">
             <label
               for="username"
               className="block text-sm/6 font-medium text-gray-900 font-semibold"
             >
               Username
             </label>
             <div className="mt-2">
               <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                 <input
                   type="text"
                   name="username"
                   id="username"
                   className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                   placeholder="username"
                 />
               </div>
             </div>
           </div>
           <div className="sm:col-span-4">
             <label
               for="password"
               className="block text-sm/6 font-medium text-gray-900 font-semibold mt-5"
             >
               Password
             </label>
             <div className="mt-2">
               <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                 <input
                   type="password"
                   name="password"
                   id="password"
                   className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                   placeholder="password"
                 />
               </div>
             </div>
           </div>
         </div>
         <div className="flex justify-center">
           <button
             className="border rounded-full px-4 mt-10 border-blue-500 text-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white active:bg-blue-700"
           >
             Sign Up
           </button>
         </div>
       </form>
     </div>
   </div>
 );
}

export default SignUp