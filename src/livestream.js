import { HeaderSpace } from "./Home";
import live from "./livestreamimage.jpg";

export const LiveStream = () => {
  return (
    <>
      <HeaderSpace />
      <center className="p-0">
        <h4>Upcoming</h4>
        <img className="h-50 w-75" src={live} alt="logo" />
      </center>
    </>
  );
};