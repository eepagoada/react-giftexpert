import {render, screen} from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    test('Debe contener 2 elementos iniciales en la categoria', () => {

        
        render ( <GifExpertApp />)

        screen.debug()
        expect(screen.getAllByRole("heading", { level: 3})).toHaveLength(2)    
    });

    

});