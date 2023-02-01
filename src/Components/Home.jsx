import React, { useEffect, useState } from "react";
import Employeelist from "./Employeelist";

const Home =() =>
{
let[ employees, setEmployees]=useState(null);
let[ pending, setPending]=useState(true);
let[ error, setError]=useState(null);

useEffect(()=>
{
    setTimeout(()=>{
        fetch( "http://localhost:4000/employees")
        .then((response)=>{
            if(response.ok===false)
            {
                throw Error ("Employee Data Not Found")
            }
           
             return response.json()
        
        })
        .then((data)=>{setEmployees(data);setPending(false)})
        .catch((err)=>{setError(err.message); setPending(false) })

    },1000)
},[])

return(
    <div className="home">
        
        { error    &&  <h1>{error}</h1>}
        { pending  &&  <div className="loader"></div> }
        { employees   &&  <Employeelist empdata={employees}  title="ALL EMPLOYEES LIST"/>}
        
      </div>
)}
export default Home;