import { FunctionComponent } from "react";
import './splashHead.css';

const SplashHead: FunctionComponent = () => {
    return (
        <header>
            <div id="title">Rover Images</div>
            <div id="text">
                Explore a comprehensive collection of photographs from NASA's Curiosity, Opportunity, and Spirit rovers.
            </div>
        </header>
    );
}

export default SplashHead;