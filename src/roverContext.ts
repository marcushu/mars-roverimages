import { createContext } from "react";

export type RoverName = 'Spirit' | 'Opportunity' | 'Curiosity';

interface ContextType {
    roverName: RoverName
    setRover: React.Dispatch<React.SetStateAction<RoverName>>
  }

  const Context = createContext<ContextType | null>(null);

  export default Context;