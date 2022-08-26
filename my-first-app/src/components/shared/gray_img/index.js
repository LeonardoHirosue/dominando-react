import "./style.css"

const GrayImg = (props) => {
    return  (
        <img className={props.color ? "color-img" : "gray-img"} src={props.url_img}></img>
    )
}

export default GrayImg