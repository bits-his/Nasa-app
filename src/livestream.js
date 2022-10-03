import { useNavigate } from "react-router-dom";
import { HeaderSpace } from "./Home";
// import live from "./livestreamimage.jpg";
import { JitsiMeeting } from "@jitsi/react-sdk";
// import { Input } fro "reactstrap";

export const LiveStream = () => {
  // const clientId =
  //   "760000377025-jk4dbjjc544afbfvkhv6tj0viv0cpbb1.apps.googleusercontent.com";
  // secretID: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
  const navigate = useNavigate();
  
  return (
    <>
      <HeaderSpace navigate={navigate} />
      <center className="p-0">
        {/* <img className="h-50 w-75" src={live} alt="logo" /> */}
        {/* <Input type="text"/> */}
        <JitsiMeeting
          // appId={"YOUR_APP_ID"}
          roomName={"Space Gateway"}
          // useStaging={true}
          configOverwrite={{
            startWithAudioMuted: true,
            hiddenPremeetingButtons: ["microphone"],
          }}
          getIFrameRef={(node) => (node.style.height = "800px")}
        />
        {/* <button onclick={() => authenticate().then(loadClient)}>
          authorize and load
        </button>
        <button onclick={execute}>execute</button> */}
      </center>
    </>
  );
};
