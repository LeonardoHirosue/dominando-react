import React, { Fragment } from 'react'
import Planet from './planet'

async function getPlanets(){
    const response = await fetch('http://localhost:3000/api/planets.json');
    const data = response.json();
    return data;
}

class Planets extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            planets: []
        }
    }

    componentDidMount(){
        getPlanets().then(data =>{
            this.setState(state => ({
                planets: data['planets']
            }))
        })
    }

    duplicateLast = () => {
        let lastPlanet = this.state.planets[this.state.planets.length-1]
        this.setState(state => ({
            planets: [...this.state.planets, lastPlanet]
        }))
    }

    removeLast = () => {
        let newPlanets = [...this.state.planets]
        newPlanets.pop()
        this.setState(state => ({
            planets: newPlanets
        }))
    }

    render(){
        return(
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remove Last</button>
                <button onClick={this.duplicateLast}>Duplicate Last</button>
                <hr/>
                {this.state.planets.map(planet =>
                    <Planet title = {planet.name}
                            description = {planet.description}
                            img_url = {planet.img_url}
                            link = {planet.link}
                    />
                )}
            </Fragment>
        ) 
    }
}

export default Planets