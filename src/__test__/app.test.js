import React from "react";
import {render,fireEvent,waitFor,screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../app";

beforeEach(() => {
    render( < App / > );
})


test('Test load and display app header', async () => {
    const header = await waitFor(() => screen.getByTestId('header'));
    expect(header.textContent).toBe('RESTy');

});
test('Test when click the button show result  ', async () => {
    const button = screen.getByTestId('button');
    const results = await waitFor(() => screen.getByTestId("data"));
    fireEvent.click(button);
    expect(results).toHaveTextContent('Loading');

});