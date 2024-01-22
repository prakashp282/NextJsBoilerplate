import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Page', () => {
  it('renders a heading', () => {
    //Arrange
    render(<Home />);
    //Act
    const heading = screen.getByText('Docs');
    //Assert
    expect(heading).toBeInTheDocument();
  });
});
