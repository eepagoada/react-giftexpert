import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('pruebas en GifItem', () => { 

    const title = "Enrrin Pagoada"
    const url = "http://www.imagen.com/enrrin.jpg"

    test ('Es igual al snapshot', () => {
        
        const {container} = render( 
            <GifItem title={title} url={url}/>
        )

        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render(
            <GifItem title={title} url = {url} />
        )

        expect(screen.getByRole('img').src).toBe(url)
        expect(screen.getByRole('img').alt).toBe(title)

    })

    test('Debe de mostrar el titulo en el componente', () => { 
    
        render(
            <GifItem title={title} url = {url} />
        )

        expect(screen.getByText( title )).toBeTruthy()

    })

 })