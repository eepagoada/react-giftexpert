import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => { 

    test('debe de cambiar el valor de la caja de texto', () => { 

        render(< AddCategory onAddCategory={ () => {}}/>);

        const input = screen.getByRole('textbox');
        // screen.debug()

        fireEvent.input( input, { target: { value: 'Saitama'}} );

        expect( input.value ).toBe('Saitama')

     });

    test('debe de llamar onAddCategory si el input tiene un valor', () => { 

        const inputValue = 'Saitama';
        const onAddCategory = jest.fn()

        render( <AddCategory onAddCategory={ onAddCategory }/>)

        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form");

        fireEvent.input ( input, { target: { value: inputValue } })

        fireEvent.submit( form )

        expect( input.value ).toBe('')

        expect( onAddCategory ).toHaveBeenCalled();
        expect( onAddCategory ).toHaveBeenCalledTimes(1);
        expect( onAddCategory ).toHaveBeenCalledWith( inputValue );

        
        // screen.debug()

    })

    test('no debe de llamar el onNewCategory si el input está vacío', () => { 

        const inputValue = 'Saitama';
        const onAddCategory = jest.fn();

        render( <AddCategory onAddCategory={ onAddCategory } />)

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        // fireEvent.input ( input, { target: { value: inputValue } })

        fireEvent.submit ( form )
        
        expect( onAddCategory ).toHaveBeenCalledTimes(0)
        expect( onAddCategory ).not.toHaveBeenCalled()
        
        // screen.debug()

     })

 })