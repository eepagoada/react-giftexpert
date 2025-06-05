import {renderHook, waitFor} from '@testing-library/react'
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => { 

    test('debe de regresar el estado inicial', () => { 

        const { result } = renderHook( () => useFetchGifs('One Punch'))
        const { Image, isLoading } = result.current;

        expect ( Image).toHaveLength(0)
        expect( isLoading ).toBeTruthy()

    });

    test('debe de retornar un arreglo de imágenes y isLoading es fasle', async () => { 

        const { result } = renderHook( () => useFetchGifs('One Punch'))
        
        await waitFor(
            () => expect( result.current.Image ).not.toHaveLength(0), //sea mayor que cero tobeGreaterThan(0)            
        );
        
        const { Image, isLoading } = result.current;

        expect ( Image.length).toBeGreaterThan(0)
        expect( isLoading ).toBeFalsy()

    });
});