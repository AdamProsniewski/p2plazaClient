import {render, screen, cleanup} from '@testing-library/react'
import Navbar from '../navbar/Navbar'
import React from 'react'
import '@testing-library/jest-dom';

test('es', () =>{
    expect(true).toBe(true)
})



test('should render Navbar component', () =>{
    render(<Navbar/>);
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
})