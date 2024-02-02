import { useState } from "react";
import '../utilites/utilites.css'

const Country = ({country, handleGetName, handleGetFlag}) => {
    const {name, flags, population} = country; // destructure country.
    
    const [visited, setVisited] = useState(false); // for toogle event.
    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`card-style ${visited ? "bg-one" : "bg-two"}`}>
            <img src={flags.png} alt="" />
            <h2>{name?.common}</h2>
            <p>Population : {population}</p>
            <button style={{backgroundColor : visited ? "red" : "green", padding: "5px 10px",borderRadius : "5px", marginRight: "5px", outline : 0, border : 0, color : "white"}} onClick={handleVisited}>{visited ? "Complete" : "Incomplete"}</button>

            <button style={{backgroundColor : "tomato" , color :"white", padding: "5px 10px",borderRadius : "5px", marginRight: "5px"}} onClick={()=> handleGetName(country)}>Add Name</button>
            <button style={{backgroundColor : "green" , color :"white", padding: "5px 10px",borderRadius : "5px", marginRight: "5px"}} onClick={()=> handleGetFlag(country)}>Add Flag</button>
        </div>
    );
};
export default Country;