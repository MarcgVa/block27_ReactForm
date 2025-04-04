import React, { useState } from 'react'



const Authenticate = ({ token }) => {
  const API_URL = "https://fsa-jwt-practice.herokuapp.com/";
  const [authMessage, setAuthMessage] = useState(null);




 const handleClick = async () => {
   
   try {
     const response = await fetch(`${API_URL}authenticate`, {
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
       },
     });
     const json = await response.json();
     if (json.success) {
       setAuthMessage(json.message);
     }

     if (json.error) {
       throw new Error(json.error.message);
     }
   } catch (err) {
     console.error(err.message);
   }
 };





  return (
    <div className="space-y-12">
      <div className="border-5 border-blue-700/10 justify-center m-20 pb-12">
        <h2 className="font-bold text-center p-2 mt-5 mx-20 rounded-md bg-linear-to-r from-pink-500 to-blue-500 px-2 text-white">
          Authenticate
        </h2>
        <h2 className="mt-5 mx-20 p-4 ${authMessage !== null ? bg - green - 400 : null}">
          <p className="text-red-800 text-center font-bold text-5xl text-shadow-amber-400 text-shadow-lg">
            {authMessage !== null ? authMessage : null}
          </p>
          <article className="text-wrap: wrap-anywhere pt-5">
            <p className="text-blue-700 mx-20 ">Token:</p>
            <p className="text-blue-700/75 mx-20 text-sm border p-2 ">
              {token !== null ? token : null}
            </p>
          </article>
        </h2>
        <div className="flex justify-center">
          <button
            className="border rounded-full px-4 mt-10 border-blue-500 text-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white active:bg-blue-700"
            onClick={handleClick}
          >
            Authenticate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authenticate