import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import '../utilites/utilites.css'


const Countries = () => {
    const [countries, setCountries] = useState([]) // for set country json.
    const [getContryName, setGetContryName] = useState([]) // for get country name.
    const [getContryFlag, setGetContryFlag] = useState([]) // for get country flag.

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all") // for get country json.
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])


    const handleGetName = (countryName)=>{    // event handler for get country name.
        const newGetName = [...getContryName, countryName];  // for push contry data in array.
        setGetContryName(newGetName)
    }

    const handleGetFlag = (countryFlag) => {  // event handler for get country flag.
        const newGetFlag = [...getContryFlag, countryFlag] // for push contry data in array.
        setGetContryFlag(newGetFlag)
    }

    return (
        <div className="container mx-auto px-[4%] md:px-[0%]">
            <div>
                <h2 className=" font-bold text-6xl text-center py-6">World Tour </h2>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-12 gap-5 w-full flex py-6">
                {
                  getContryFlag.map(countryFlag => <img className="pr-4" src={countryFlag.flags.png}></img>)
                }
            </div>
            <div className="flex flex-wrap list-none">
                {
                    getContryName.map(countryName => <li className=" pr-4">{countryName.name.common}</li>)
                }
            </div>
            
            <div className=" grid grid-col md:grid-cols-3 gap-6 mt-9">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleGetName={handleGetName} handleGetFlag={handleGetFlag}></Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;