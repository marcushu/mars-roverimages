import { FunctionComponent } from "react";

interface NoImageProps {
  sol: number
}

const NoImage: FunctionComponent<NoImageProps> = ({ sol }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>No images available for sol {sol}</h2>
    </div>
  );
}

export default NoImage;