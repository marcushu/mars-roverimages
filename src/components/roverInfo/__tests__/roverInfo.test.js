import { render, screen } from "@testing-library/react";
import RoverInfo from "..";


it('should load the correct info card', () => {
    render(<RoverInfo selectedRover={'Curiosity'} />);

    const view = screen.getByText(  /curiosity landed in the gale crater on november 26, 2011 with the primary goal of climate and geological research\. curiosity is the fourth rover sent by nasa to mars, succeeding opportunity which landed in 2004\. weighing in at just under one ton, its extended mission to to asses weather or not conditions on the red planet could have ever supported life continued sending images until december 2022\./i  )

    expect(view).toBeInTheDocument();
});

it('should match snapshot', () => {
    const { asFragment } = render(<RoverInfo selectedRover={'Spirit'} />);

    expect(asFragment()).toMatchSnapshot();
})