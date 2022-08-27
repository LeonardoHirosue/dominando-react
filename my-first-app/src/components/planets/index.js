import React, { Fragment, useState, useEffect } from 'react'
import Planet from './planet'
import Form from './form'

async function getPlanets(){
    const response = await fetch('http://localhost:3000/api/planets.json');
    const data = response.json();
    return data;
}

const Planets = () => {
    const[ planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets().then(data =>{
            setPlanets(data['planets'])
        })
    }, [])

    const addPlanet = (newPlanet) =>{
        setPlanets([...planets, newPlanet])
    }

    return(
        <Fragment>
            <h3>Planet List</h3>
            <hr/>
            <Form addPlanet={addPlanet}/>
            <hr/>
            {planets.map((planet,index) =>
                <Planet id = {planet.id}
                        title = {planet.name}
                        description = {planet.description}
                        img_url = {planet.img_url}
                        link = {planet.link}
                        key={index}
                />
            )}
        </Fragment>
    ) 
}

export default Planets