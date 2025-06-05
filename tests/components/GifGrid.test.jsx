import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            Image: [],
            isLoading: true
        });

        render( <GifGrid category={ category }/>)

        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));

        screen.debug()
    });

    test('debe de mostrar items cuando se cargan las imágenes desde useFetchGifs', () => { 

        const gifs = [
            { id: 'ABC', title: 'Saitma', url: 'https://www.google.com'},
            { id: 'AB1', title: 'Goku', url: 'https://www.google.com/gojy'},
        ];

        useFetchGifs.mockReturnValue({
            Image: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category }/>)

        expect( screen.getAllByRole('img').length).toBe(2)
    })
});