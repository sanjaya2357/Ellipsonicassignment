import React, { useEffect, useState } from "react";
import { useHistory,useParams,Link } from "react-router-dom";

const Employeedetails =() =>
{

    let { empid} = useParams()
    let history=useHistory()
    let[ employee, setEmployee]=useState(null);
    let[ pending, setPending]=useState(true);
    let[ error, setError]=useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:4000/employees/"+empid)

                .then((response) => {
                    if (response.ok == true) {
                        return response.json()
                    }
                    else {
                        throw Error(" data not found, please try for diffrent ")
                    }
                })

                .then((data) => { setEmployee(data); setPending(false) })
                .catch((err) => { setError(err.message); setPending(false) })
        }, 2000)
    }, [])



let handleDeleteemployee = () =>{
    fetch("http://localhost:4000/employees/"+ empid , {method:"DELETE"})
    .then(() =>{
        alert("Employee data deleted")
        history.push("/")
        
    })

return
(
    <div className="home">
        
        { error    &&  <h1>{error}</h1>}
        { pending  &&  <div className="loader"></div> }
        {employee && <div className="employee-detail">
            <img src={employee.photo} alt="" height="100px" width="100px" /> 

                            <h3>{employee.name}</h3>

                            <h3>{employee.email}</h3>
                            <h3>{employee.mobnumber}</h3>
                            <h3>{employee.Country}</h3>
                            <h3>{employee.state}</h3>
                            <h3>{employee.City}</h3>
                            <h3>{employee.profskills}</h3>

                  <button onClick={handleDeleteemployee}>Delete Employee</button>
                <Link to={`/update${empid}`}> 
                <button>update Employeedetails</button>
                </Link>
    
            </div>
            } 
         </div>
)
}  
}       
export default Employeedetails;
       
