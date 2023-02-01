import React, { useRef, useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios, {Axios  } from "axios";

const Updateemployee = () => {

	let history = useHistory();
    let Firstname = useRef();
	let Lastname = useRef();
	let email = useRef();
	let mobnumber = useRef();
	let City = useRef();
	let dob = useRef();
	let country = useRef();
	let state = useRef();
    let profskills = useRef();
	let photo = useRef();
	


	let handleupdateEmployee = (e) => {
		e.preventDefault();
		setIssumbit(true)
		
		}

		let newEmployee = {
			
			Firstname: Firstname.current.value,
            Lastname: Lastname.current.value,
            email: email.current.value,
            mobnumber: mobnumber.current.value,
            City: City.current.value,
            dob: dob.current.value,
            country: country.current.value,
            state: state.current.value,
            profskills: [],
            photo: photo.current.value,

			}
			
		
		fetch("http://localhost:4000/employees", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newEmployee)
		})
			.then(() => {
				alert("n Employee details updates");
				history.goBack();
            })

			const initialValues={Firstname:"", Lastname:"", email:"",mobnumber:""}
	        const[formValues, setFormValues]=useState(initialValues);
	        const [formErrors, setFormErrors]=useState({});
	        const [isSumbit, setIssumbit]=useState(false)



	const handlechange =(e)=>{
		const {name, value}=e.target;
		setFormValues({...formValues, [name]: value});
		
	}
	const validate =(values)=>{
		const errors={};
		const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
		if(!values.Firstname){
			errors.Firstname ="Firstname is required!"
		}
		if(!values.Lastname){
			errors.Lastname ="Lastname is required!"
		}
		if(!values.email){
			errors.email ="email is required!"
		}
		else if(!regex.test(values.email)){
			errors.email ="This is not valid email!"
		}
		if(!values.mobnumber){
			errors.email ="Mobnumber is required!"
		}
		else if(!values.mobnumber.length==10){
			errors.email ="This is not valid phone number!"
		}

		return errors;
		
	}

	useEffect(()=>
	{
		if(Object.keys(formErrors).length===0 && isSumbit)
		console.log(formValues);
	})

	// For country and state dropdown
	 let [data ,setData]=useState([])
	 let [getcountry , setcountry]=useState()
	 let [getstates, setstates]=useState([])
	 let[selectesstates, setSelectedstates]=useState();
	 let[cities,setcities]=useState([]);

	 useEffect(()=>
	axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
	.then(res =>setData(res))
	.catch(err => console.log(err) )
	)
     
	const nation= [...new Set(data.map(item => item.country))];
	nation.sort();

	const handlecounty=(e)=>{
		let states =data.filter(state => state.country=== e.target.value)
	  states =[...new Set(states.map(item =>item.subcountry))];
	  setstates(states);
	}

	const handlestate =(e)=>{
		let cities =data.filter(city => city.country=== e.target.value)
		setcities(cities)
	}
        

	return (
		
		<div className="update-Employee" >
			
			<div className="update-container" > 
			<h1 >UPDATING EMPLOYEE</h1>

			<hr/>

			<form onSubmit={handleupdateEmployee}>
				
				
				<label >First name cant be empty</label><input type="text" placeholder="Firstname" value={ formValues.Firstname} ref={Firstname} onChange={handlechange} />
				<p>{formErrors.Firstname}</p> 
				<br />
                <label >Last Name :</label><input type="text" placeholder="Lastname" value={ formValues.Lastname} ref={Lastname} onChange={handlechange} /> 
                <p>{formErrors.Lastname}</p> 
				<br />
				<label >Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</label><input type="email" value={ formValues.email} ref={email} onChange={handlechange}/>
                <p>{formErrors.email}</p>  <br />				
				<label >Ph Number :</label><input type="tel" ref={mobnumber} placeholder="Phone Number" value={ formValues.Mobnumber} onChange={handlechange} /> <br />
                <label >Dob &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</label><input type="text" ref={dob} /> <br />

               <label>Country:</label>       
				<select onChange={(e)=> handlecounty(e)} ref={country}>
				<option value="">select country</option>
					{country.map(items => <option key={items} value={getcountry}>{items}</option>)}
				</select> <br />
				<label>State:</label>       
				<select onChange={(e)=> handlestate(e)} ref={state}>
					<option value="">select state</option>
					{getstates.map(items => <option key={items} value={selectesstates}>{items}</option>)}
				</select> <br />
				<label>City:</label>       
				<select  ref={City}>
					<option value="">select city</option>
					{cities.map(items => <option key={items.name} >{items.name}</option>)}
				</select> <br />
				

				<label>Professional skills:</label> <div className="type-opt"> 
											<input type="checkbox" name="skills" ref={profskills} />	<label>Leadership</label>
											<input type="checkbox" name="skills"  ref={profskills} />	<label>Time Management</label>
											<input type="checkbox" name="skills" ref={profskills}  />	<label>Decisision Making</label>
											<input type="checkbox" name="skills" ref={profskills} />	<label>Communication</label>
										</div> <br />

				<label>Photo :</label> <input type="file" ref={photo} /> <br />
				

				<input type="submit" value="Add Employee" /> <br />

			</form>
			</div>
		</div>

	);

    }
export default Updateemployee;