import DescriptionWithLink from '../../shared/description_with_link'
import GrayImg from '../../shared/gray_img'

const Planet = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <DescriptionWithLink description ={props.description} link = {props.link}/>
            <GrayImg url_img = {props.img_url}/>
        </div>
    )
}

export default Planet