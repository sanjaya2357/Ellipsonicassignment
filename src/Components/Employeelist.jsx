import '../Styles/Home.css'
import { Link } from "react-router-dom";

const Employeelist = ({ empdata, title }) => {
     
    return (
      <>
        <h1>{title}</h1> 
        <div className="Employeelist">
        {
          empdata.map((emp) => {
            return (
              <div className="Employee" key={emp.empid}>
        
                  <table className="table">
                    <thead>
                        <tr>
                          <th>Photo</th>
                          <th>FirstName</th>
                          <th>LastName</th>
                          <th>Email</th>
                          <th>Mobile Number</th>
                          <th>City</th>  
                        </tr>
                        
                        <tr>
                           
                            <td className="nav img"><img src={emp.photo} alt="" height="100px" width="100px" /> </td>
                            {/* <img src="emp.photo" alt="" />  */}
                            <td>{emp.Firstname}</td>
                            <td>{emp.Lastname}</td>
                            <td>{emp.email}</td>
                            <td>{emp.mobnumber}</td>
                            <td>{emp.City}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <Link to={`/employeedetails${emp.empid}`}> <button>EMPLOYEE FULL DETAILS </button></Link>
                                      
            </tr>
            </thead>
                  </table> <br />
             
              </div>
            )
          })
        }
      </div>
      </>
    );
  }
export default Employeelist;