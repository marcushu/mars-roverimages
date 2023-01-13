import { render, screen } from "@testing-library/react"
import PagePicker from "../PagePicker"

const mockSetPageFunc = jest.fn();

it('should display a number for each page', () => {
    render(<PagePicker currentPage={2} numOfPages={5} setCurrentPage={mockSetPageFunc} />);

    const view = screen.getByTestId('pagepicker')
    expect(view).toBeInTheDocument();
});

it('should call update function with the correct argument', () => {
    render(<PagePicker currentPage={2} numOfPages={5} setCurrentPage={mockSetPageFunc} />);

    const el = screen.getByText(/2/);
    
    el.click();
    expect(mockSetPageFunc.mock.calls[0][0]).toBe(2);
});

it('should match snapshot', () => {
    const { asFragment } = render(<PagePicker currentPage={2} numOfPages={5} setCurrentPage={mockSetPageFunc} />);

    expect(asFragment()).toMatchSnapshot();
});
