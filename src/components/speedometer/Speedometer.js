import { Card } from "react-bootstrap";
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
} from "react-speedometer";
import BG from "../../assets/images/speedometer.svg";

export const HodlerSpeedometer = () => {
  return (
    <div className="HodlerSpeedometer position-relative">
      <Card
        className="position-absolute"
        style={{ backgroundImage: `url(${BG})` }}
      ></Card>
      <Speedometer
        value={22}
        width={180}
        max={100}
        height={125}
        angle={180}
        fontFamily="squada-one"
        accentColor="red"
      >
        <Needle circleColor="white" color="#666666" baseOffset={-16}/>
      </Speedometer>
    </div>
  );
};
