import React, { useEffect, useState } from "react"

import { useForm } from '@formspree/react';

const NewsletterSubscription=()=>{

    const [state, handleSubmit] = useForm('mjvqybvq');

    const [users, setUsers] = useState([]);

    const [fetchFlag, setFetchFlag] = useState(false);

    const [found, setFound] = useState(false);

    const fetchUserData = () => {
      fetch('https://formspree.io/api/0/forms/mjvqybvq/submissions',{
        headers:{'Authorization': 'Bearer 5404ebcd8bc9d109ca39c77f9fbab080a94279c5'}
    }).then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data.submissions);
        })
        
    }

    useEffect(() => {
      fetchUserData()
    }, [])

    useEffect(() => {
      setFetchFlag(true);
    }, [users]);

    const checkemail=(e)=>{
      if(fetchFlag)
      {
        setFound(users.some(el => el.email === e.target.value));
      }
    }

    const resetFound=()=>{
      setFound(false);
    }

    if(found){
      return <div className="bg-deep-blue flex p-6"><h4 className="text-white mb-3">Email already exists.</h4><div className="flex p-6"></div>
      <button onClick={resetFound} className="block bg-deep-red rounded-sm text-base font-medium text-center text-white px-2 md:px-6 py-3 w-4/12">Try again</button></div>;
    }
    
    if (state.succeeded) {
    return <div className="bg-deep-blue flex p-6"><h4 className="text-white mb-3">Thank you for subscribing.</h4></div>;
    }
    return(
        <form className="bg-deep-blue flex p-6" onSubmit={handleSubmit} method="POST" id="NewsForm">
          <input type="text" name="email" id="first-name" autoComplete="given-name" onChange={(e)=>{checkemail(e)}} placeholder="Enter Your email address" className="bg-deep-blue w-8/12 flex  border-0 py-1.5 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white"/>
          <button type="submit" disabled={state.submitting} className=" block bg-deep-red rounded-sm text-base font-medium text-center text-white px-2 md:px-6 py-3 w-4/12">Subscribe</button>
        </form>
    );
}

export default NewsletterSubscription;