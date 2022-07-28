import React from "react";
import { useState } from "react";
import Axios from "axios";


export default function Create() {
    const [name1, setName] = useState("");
    const [age1, setAge] = useState("");
    const [city1, setCity] = useState("");
    const [country1, setCountry] = useState("");

    const postData = () => {
        const data = {
            name: name1,
            age: age1,
            city: city1,
            country: country1,
        };
        Axios.post("http://localhost:5000/create", data).then((res) => {
            window.location.reload();
        });
    };

    return (

        < div className = "add-card" >
        <label> Name</label> <br />
        <input value = { name1 } onChange = { (e) => setName(e.target.value)}/>  <br />


        <label>  Age</label>  <br />
        <input value = {age1} onChange = {(e) => setAge(e.target.value)} />  <br />
       
        <label> City  </label>  <br />
         <input value = {city1} onChange = {(e) => setCity(e.target.value)}/>  <br />
         
         
         
        
        <label> Country { " " } </label>  
        <input value = {country1} onChange = {(e) => setCountry(e.target.value)}/> 

        <button className="add-btn" onClick = {
            () => postData()
        }> Submit </button> 
        </div>
    );
}