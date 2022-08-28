import { Fragment, useState } from "react"

const initialState ={
    name: ''
}
const Form = (props) => {
    const[fields, setFields] = useState(initialState)
    
    const handleChange = (event) => setFields({
        ...fields,
        [event.target.name]: event.target.value
    })

    const handleSubmit = (event) =>{
        props.addSatellite(fields)
        event.preventDefault()
        setFields(initialState)
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" value={fields.name} onChange={handleChange}/>
                </div>
                <br/>
                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default Form