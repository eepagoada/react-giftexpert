import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setinputValue] = useState('One Puch')

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
        <form onSubmit={ onSubmit}>
            <input 
                type={"text"}
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
