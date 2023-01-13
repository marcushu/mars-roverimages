import { render, screen } from "@testing-library/react"
import RoverCard from "../RoverCard"

let rovercard = null;

afterEach(() => {
    rovercard.remove();
    rovercard = null;
});

it('should render all information', () => {
    render(<RoverCard 
        imageCount={123}
        landingDate={"1-1-1"}
        lastDate={'2-2-2'}
        launchDate={'01-01-2020'}
        roverName={"Curiosity"}
        totalSols={1000} />);

    rovercard = screen.getByText(/Curiosity/i);
    expect(rovercard).toBeInTheDocument();

    const imagecount = screen.getByRole('cell', {  name: /123/i})
    expect(imagecount).toContainHTML('<td>123</td>');
    const landingdate = screen.getByRole('cell', {  name: /1-1-1/i});
    expect(landingdate).toContainHTML('<td>1-1-1</td>');
    const lastdate = screen.getByRole('cell', {  name: /2-2-2/i});
    expect(lastdate).toContainHTML('<td>2-2-2</td>');
    const launchdate = screen.getByRole('cell', {  name: /01-01-2020/i});
    expect(launchdate).toContainHTML('<td>01-01-2020</td>');
    const totalsols = screen.getByRole('cell', {  name: /1000/i})
    expect(totalsols).toContainHTML('<td>1000</td>');
});