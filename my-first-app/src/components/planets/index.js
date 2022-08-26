import React, { Fragment } from 'react'
import Planet from './planet'

class Planets extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            planets: [
                {
                    title: "Mercúrio",
                    description: "Mercúrio, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno.",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg",
                    link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                },
                {
                    title: "Plutão",
                    description: "Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno.",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/420px-Pluto_in_True_Color_-_High-Res.jpg",
                    link: "https://pt.wikipedia.org/wiki/Pluto"
                }
            ]
        }
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