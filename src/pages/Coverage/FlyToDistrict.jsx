import { useMap } from "react-leaflet";
import { useEffect } from "react";

const FlyToDistrict = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 10, { animate: true });
    }
  }, [position, map]);

  return null;
};

export default FlyToDistrict;