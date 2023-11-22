import "./style.css";
import { TLight, useStopLight } from "./hooks";

const StopLight = () => {
  const { light } = useStopLight();

  const getLightClass = (status: TLight) => {
    return `light   ${light === status ? status : ""}`;
  };

  return (
    <div className="stop-light">
      <div className={getLightClass("stop")}></div>
      <div className={getLightClass("slow")}></div>
      <div className={getLightClass("go")}></div>
    </div>
  );
};

export default StopLight;
