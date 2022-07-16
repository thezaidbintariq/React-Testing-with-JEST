import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';


describe('Greeting Component', () => {

    test('renders Greeting ', () => {
        //Arrange
        render(<Greeting />);
        //Act (not necessary)

        //ASSERT
        const linkElement = screen.getByText('Hello World', { selector: 'h1' });
        expect(linkElement).toBeInTheDocument();
        const linkElement2 = screen.getByText('Good to see you.', { selector: 'p' });
        expect(linkElement2).toBeInTheDocument();
    });

    test('renders Greeting with changed text', () => {
        //Arrange
        render(<Greeting />);
        //Act (not necessary)

        //ASSERT
        const linkElement = screen.getByRole('button');
        userEvent.click(linkElement);
        const linkElement2 = screen.getByText('Text Changed.', { selector: 'p' });
        expect(linkElement2).toBeInTheDocument();
    });

    test('check if "Good to see you" is not rendered', () => {
        //Arrange
        render(<Greeting />);
        //Act
        userEvent.click(screen.getByRole('button'));

        //ASSERT
        const linkElement = screen.queryByText('Good to see you.', { selector: 'p' });
        expect(linkElement).toBeNull();
    });

});

