import React, { useState } from 'react';

const Country = ({country}) => {
    const {name, capital, area, population, timezones, continents,  flags,  }= country;

    const [Visited, setVisited]=useState(false)

    const hendlerVisited = ()=>{
        setVisited(!Visited)
    }
    
    return (
        <div className={`border-[3px] rounded-lg w-80 border-green-900 p-4 ${Visited && 'bg-green-800 text-white'}`}>
            <div >

                <img className='w-full bg-black h-36 rounded-lg' src={flags.png} alt="" />
                <h3 className='text-xl text-center font-bold my-2'>{name.common}</h3>
                <p className='text-lg font-medium'>Offical Name: <span className={Visited ? 'text-yellow-200':'text-green-700'}>{name.official}</span></p>
                <p>Capital: {capital}</p>
                <p>Continents: {continents}</p>
                <p>Total Area: {area}</p>
                <p>Time Zone: {timezones}</p>
                <p>Total Populations: {population}</p>
                <button onClick={hendlerVisited} className={` px-5 py-3 text-white rounded-lg bg-green-900 mt-3 font-semibold ${Visited && 'hidden'}`}>{Visited ? 'Visited': 'Waiting'}</button>

            </div>
        </div>
    );
};

export default Country;