import { useState } from "react"
import PropTypes from 'proptypes'


export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target }) => {        
        setinputValue(target.value)
    }

    const onSubmit = (event) =>{

        const value = inputValue.trim()

        event.preventDefault()
        if (value.length <= 1) return

        onAddCategory(value)
        setinputValue("")
    }

    return (
        <form onSubmit={ onSubmit} aria-label="form">
            <input 
                type={"text"}
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory : PropTypes.func.isRequired
}
