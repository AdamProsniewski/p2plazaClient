import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '../navbar/Navbar'

test('es', () =>{
    expect(true).toBe(true)
})


test('should render Navbar component', () =>{
    render(<Navbar/>);
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
}) 