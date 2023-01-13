import { render, screen, within} from "@testing-library/react";
import RoverInfo from "..";


it('should load the correct info card', () => {
    render(<RoverInfo selectedRover={'Curiosity'} />);

    const view = screen.getByText(  /in collaboration with the spirit rover \(launched jun 10, 2003\), opportunity set about covering over 28 miles or martian surface in search of evidence that water may have existed on the planet\. armed with a suite of geologists tools, including a rock abrasian tool and a microscopic camera for close analysis of surface samples, opportunity collected data from january 25, 2004 to june of 2018 before succumbing to a dust storm\./i  );
    const rovername = within(view).getByText(/curiosity/i); 

    expect(rovername).toBeInTheDocument();
});

it('should match snapshot', () => {
    const { asFragment } = render(<RoverInfo selectedRover={'Spirit'} />);

    expect(asFragment()).toMatchSnapshot();
})