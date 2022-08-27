import React, { Fragment, useState } from 'react'
import Planet from './planet'

// async function getPlanets(){
//     const response = await fetch('http://localhost:3000/api/planets.json');
//     const data = response.json();
//     return data;
// }

const Planets = () => {
    const[ planets, setPlanets] = useState([
        {
            "id": "mars",
            "name": "Mars",
            "description": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet'.",
            "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg",
            "link": "https://en.wikipedia.org/wiki/Mars"
        }
    ])
    // componentDidMount(){
    //     getPlanets().then(data =>{
    //         this.setState(state => ({
    //             planets: data['planets']
    //         }))
    //     })
    // }

    const duplicateLast = () => {
        let lastPlanet = planets[planets.length-1]
        setPlanets([...planets, lastPlanet])
    }

    const removeLast = () => {
        let newPlanets = [...planets]
        newPlanets.pop()
        setPlanets(newPlanets)
    }

    return(
        <Fragment>
            <h3>Planet List</h3>
            <button onClick={removeLast}>Remove Last</button>
            <button onClick={duplicateLast}>Duplicate Last</button>
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