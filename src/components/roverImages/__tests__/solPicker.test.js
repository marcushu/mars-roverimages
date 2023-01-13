import { fireEvent, render, screen } from "@testing-library/react";
import SolPicker from "../SolPicker";

const mockFunc = jest.fn();


it('should display correct sol and total sols', () => {
    render(<SolPicker currentSol={3} totalSols={1234} setSol={mockFunc} />);

    // total sols
    const solInput = screen.getByText(/solof 1234/i);
    expect(solInput).toBeInTheDocument();
    //current sol
    expect(screen.getByDisplayValue(3)).toBeInTheDocument();
});


it('should only call the setsol function if the input is not empty', () => {
    render(<SolPicker currentSol={3} totalSols={1234} setSol={mockFunc} />);

    const solInput = screen.getByRole('spinbutton');

    // empty input...
    fireEvent.change(solInput, {target: {value: ''}});
    const rightBtn = screen.getByRole('button', {  name: /❯/i});
    fireEvent.click(rightBtn);
    expect(mockFunc.mock.calls).toHaveLength(0)

    // with input
    fireEvent.change(solInput, {target: {value: '10'}});
    fireEvent.click(rightBtn);
    expect(mockFunc.mock.calls).toHaveLength(1);
});


it('should use next-button to call the function with the correct input', () => {
    render(<SolPicker currentSol={3} totalSols={1234} setSol={mockFunc} />);
    
    // click next, no input change, should go to next page
    const rightBtn = screen.getByRole('button', {  name: /❯/i});
    fireEvent.click(rightBtn);

    expect(mockFunc.mock.calls[0][0]).toBe(4);
});


it('should use previous-button to call the function with the correct input', () => {
    render(<SolPicker currentSol={3} totalSols={1234} setSol={mockFunc} />);

    // click previous, no input change, should go to previos page
    const leftBtn = screen.getByRole('button', {  name: /❮/i});
    fireEvent.click(leftBtn);

    expect(mockFunc.mock.calls[0][0]).toBe(2);
});


it('should call the function with the correct jump to value', () => {
    render(<SolPicker currentSol={3} totalSols={1234} setSol={mockFunc} />);

    const solInput = screen.getByRole('spinbutton');
    fireEvent.change(solInput, {target: {value: '100'}});

    // next button
    const rightBtn = screen.getByRole('button', {  name: /❯/i});
    fireEvent.click(rightBtn);

    expect(mockFunc.mock.calls[0][0]).toBe(100);

    // prev button
    const leftBtn = screen.getByRole('button', {  name: /❮/i});
    fireEvent.click(leftBtn);

    expect(mockFunc.mock.calls[0][0]).toBe(100);
});


it('should match snapshot', () => {
    const { asFragment } = render(<SolPicker currentSol={3} totalSols={1234} setSol={mockFunc} />);

    expect(asFragment()).toMatchSnapshot();
});
