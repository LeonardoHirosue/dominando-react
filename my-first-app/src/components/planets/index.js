import { Fragment } from 'react'
import Planet from './planet'

const showMessage = () =>{
    return(
        alert('Meu primeiro evento')
    )
}

const Planets = () =>{
    return(
        <Fragment>
            <h3>Planet List</h3>
            <button onClick={showMessage}>Show Message!</button>
            <hr/>
            <Planet title = "Mercúrio"
                    description = "Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas."
                    img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg"
                    link = "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
            />
            <Planet title = "Plutão"
                    description = "Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno."
                    img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/420px-Pluto_in_True_Color_-_High-Res.jpg"
                    link = "https://pt.wikipedia.org/wiki/Plut%C3%A3o"
            />
        </Fragment>
    ) 
}

export default Planets