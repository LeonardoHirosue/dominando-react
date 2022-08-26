import { Fragment } from 'react'
import Planet from './planet'

const Planets = () =>{
    return(
        <Fragment>
            <h3>Planet List</h3>
            <hr/>
            <Planet title = "Mercúrio"
                    img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg"
                    link = "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                    title_with_underline = {true}
            />
            <Planet title = "Plutão"
                    description = "Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno."
                    img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/420px-Pluto_in_True_Color_-_High-Res.jpg"
                    color = {true}
            />
        </Fragment>
    ) 
}

export default Planets