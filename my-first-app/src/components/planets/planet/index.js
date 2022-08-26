import GrayImg from '../../shared/gray_img'

const Planet = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <GrayImg url_img = {props.img_url}/>
        </div>
    )
}

export default Planet