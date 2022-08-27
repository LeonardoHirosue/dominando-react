import React from 'react'
import DescriptionWithLink from '../../shared/description_with_link'
import GrayImg from '../../shared/gray_img'

async function getSatellites(id){
    const responde = await fetch(`http://localhost:3000/api/${id}.json`)
    const data = responde.json()
    return data;
}

class Planet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            satellites: [] 
        }
    }

    componentDidMount(){
        getSatellites(this.props.id).then( data => {
            this.setState(state => ({
                satellites: data["satellites"]
            }))
        })
    }

    render(){
        return (
            <div>
                <h4>{this.props.title}</h4>
                <DescriptionWithLink description = {this.props.description} link = {this.props.link}/>
                <GrayImg img_url = {this.props.img_url}/>
                <h4>Satélites</h4>
                <ul>{this.state.satellites.map((satellite, index) => <li key={index}>{satellite.name}</li>)}</ul>
                <hr/>
            </div>
        )
    }    
}

export default Planet