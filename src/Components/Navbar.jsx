import '../Styles/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
       
        <nav>
			<div className="logo">
				<Link to="/">
					<img src="http://www.ellipsonic.com/img/logo-header.jpg"  alt="logo" />
				</Link>
			</div>

			<div className="navlinks">
				<Link to="/addemployee">Add Employees</Link>
				
			</div>
      </nav>
    )
     
};
export default Navbar;