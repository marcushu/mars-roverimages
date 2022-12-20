import { FunctionComponent } from "react";

interface NextBackBtnProps {
  goFunction: () => void
  children: string
}

const NextBackBtn: FunctionComponent<NextBackBtnProps> = ({ goFunction, children }) => {
  return (
    <button onClick={goFunction}>
      {children}
    </button>
  );
}

export default NextBackBtn;