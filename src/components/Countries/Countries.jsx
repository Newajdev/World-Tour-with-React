import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setcountris]= useState([])

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setcountris(data));
    },[])

    return (
        <div className='w-[70%] mx-auto'>
            <h1 className='text-center text-7xl font-bold py-4 '>All Country List</h1>
            <h2>Total Countries: {countries.length}</h2>
            <div className='mt-5 grid grid-cols-4 gap-5 '>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;