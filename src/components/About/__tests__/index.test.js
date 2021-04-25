// import react
import React from 'react';
// import functions from the react testing library and jest-dom package
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import about
import About from '..';

// afterEach is a global variable from Jest that ensures that after each test, we don't have leftover memory data to give false results
afterEach(cleanup)

// declare component we are testing
describe('About component', () => {
    // first test - verify component is rendering
    // "it" declares what is being tested
    it('renders', () => {
        render(<About />)
    })
    // second test - compare snapshot versions of the DOM node structure enabled by Jest - creates a snap file in a snapshot folder
    it('matches snapshot DOM node structure', () => {
        // render snapshot of the About component
        const { asFragment } = render(<About />)
        // compare whether expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    })
})