import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// add categories array and mock functions to handle props for Nav
const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />)
    })

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />)
        // assert value comparison
        expect(asFragment()).toMatchSnapshot()
    })
})

// check if emoji is visible
// note that describe functions aren't necessary, but they help organize the code
describe('emoji is visible', () => {
    it('insert emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav />)

        // Assert - camera references the aria label
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

// check if links are visible
describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render(<Nav />);

      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
})