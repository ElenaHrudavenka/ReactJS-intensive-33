import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test(`renders 'имя'`, () => {
    render(<App/>);
    const linkElement = screen.getByText(/имя/i);
    expect(linkElement).toBeInTheDocument();
});
