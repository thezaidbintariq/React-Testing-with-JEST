import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async Component',() => {
    test('Testing Asyn', async () => {
        
        //Mock the fetch function
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'm1', title: 'Hello World' }],
        });

        render(<Async />);
        const listitems = await screen.findAllByRole('listitem');
        expect(listitems).not.toHaveLength(0);
    }
    );

});