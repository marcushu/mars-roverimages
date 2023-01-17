import { FunctionComponent } from "react";
import { RoverName } from "../../roverContext";
import RoverInfoCard from "./RoverInfoCard";
import spiritImg from '../../images/spirit.jpeg';
import opportunityImg from '../../images/opportunity.jpeg';
import curiosityImg from '../../images/curiosity.png';

interface RoverInfoProps {
  selectedRover: RoverName
}

const RoverInfo: FunctionComponent<RoverInfoProps> = ({ selectedRover }) => {
  return (
    <div>
      {selectedRover === 'Curiosity' &&
        <RoverInfoCard roverImage={curiosityImg} roverName={selectedRover}>
          Curiosity landed in the Gale Crater on November 26, 2011 with the primary goal of climate and geological research. Curiosity is the fourth rover sent by NASA to mars, succeeding Opportunity which landed in 2004. Weighing in at just under one ton, its extended mission to to asses weather or not conditions on the red planet could have ever supported life continued sending images until December 2022.
        </RoverInfoCard>}
        {selectedRover === 'Spirit' &&
        <RoverInfoCard roverImage={spiritImg} roverName={selectedRover}>
          As a counterpart to the opportunity rover, Spirit broadened the search for evidence of water which could have supported life on Mars. Spirit and Opportunity landed on opposite sides of the planet within 21 days of each other. Despite becoming stuck in soft sand, Spirit continued conducting research until march 22, 2010 after completing 2208 sols.
        </RoverInfoCard>}
        {selectedRover === 'Opportunity' &&
        <RoverInfoCard roverImage={opportunityImg} roverName={selectedRover}>
          In collaboration with the Spirit rover (launched Jun 10, 2003), Opportunity set about covering over 28 miles or Martian surface in search of evidence that water may have existed on the planet. Armed with a suite of geologists tools, including a Rock Abrasian Tool and a microscopic camera for close analysis of surface samples, Opportunity collected data from January 25, 2004 to June of 2018 before succumbing to a dust storm.
        </RoverInfoCard>}
    </div>
  );
}

export default RoverInfo;