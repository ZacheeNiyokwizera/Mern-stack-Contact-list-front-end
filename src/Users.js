import Create from "./Create";
import Axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";

function Users() {
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:5000/get").then((res) => setData(res.data));
    }, []);

    return (
         <div className = "cards-container" >
        {/* <Create />  */}
        { " " } {
            data.map((value) => (

                 <Cards name = { value.name }
                age = { value.age }
                city = { value.city }
                country = { value.country }
                id = { value._id }/>
            ))
        } { " " } 
        </div>
    );
}

export default Users;