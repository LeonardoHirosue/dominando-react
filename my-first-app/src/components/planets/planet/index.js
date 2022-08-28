import React, { useEffect, useState } from 'react'
import DescriptionWithLink from '../../shared/description_with_link'
import GrayImg from '../../shared/gray_img'

async function getSatellites(id){
    const responde = await fetch(`http://localhost:3000/api/${id}.json`)
    const data = responde.json()
    return data;
}

const Planet = (props) => {
    const[ satellite, setSatellite] = useState([])

    useEffect(() => {
        getSatellites(props.id).then(data => {
            setSatellite(data["satellites"])
        })
    }, [])

    return (
        <div>
            <h4>{props.title}</h4>
            <DescriptionWithLink description = {props.description} link = {props.link}/>
            <GrayImg img_url = {props.img_url}/>
            <h4>Satélites</h4>
            <ul>{satellite.map((satellite, index) => <li key={index}>{satellite.name}</li>)}</ul>
            <hr/>
        </div>
    )  
}

export default Planet