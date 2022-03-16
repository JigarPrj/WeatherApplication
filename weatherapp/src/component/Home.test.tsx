import { render, screen } from '@testing-library/react';
import Home from "./Home";
test('home',()=>{
    render(
        <Home/>
    )
    const home = screen.getByPlaceholderText('Enter country')
    expect(home).toBeInTheDocument()
})
test('home render',()=>{
    render(
        <Home/>
    )
    const home = screen.getByText('Submit')
    expect(home).toBeInTheDocument()
})
test('home element',()=>{
    render(
        <Home/>
    )
    const home = screen.getByTestId('div-html')
    expect(home).toBeInTheDocument()
})