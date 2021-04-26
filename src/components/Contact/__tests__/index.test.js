import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Render contact form', () => {
    it('renders', () => {
        render(<ContactForm></ContactForm>)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm/>)
        expect(asFragment()).toMatchSnapshot()
    })
})