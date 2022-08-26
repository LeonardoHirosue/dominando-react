import DescriptionWithLink from '../../shared/description_with_link'
import GrayImg from '../../shared/gray_img'

const Planet = (props) => {
    let names = ['a', 'b', 'c', 'd', 'e']
    let satellites = names.map(name => <li>Satélite {name}</li>)
    
    let title;
    if(props.title_with_underline){
        title =  <h4><u>{props.title}</u></h4>
    } else {
        title = <h4>{props.title}</h4>
    }

    return (
        <div>
            {title}
            <DescriptionWithLink description = {props.description} link = {props.link}/>
            <GrayImg url_img = {props.img_url} color = {props.color}/>

            <h4>Satélites</h4>
            <ul>
                {satellites}
            </ul>
            <hr/>
        </div>
    )
}

export default Planet