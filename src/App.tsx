import styled from "styled-components";
import BodyBox from "./components/bodybox";
import Box from "./components/box";
import PaginationTable from "./components/pagonationtable";

function App() {
  return (
    <div>
      {/* <BodyBox title="onerow">onerow</BodyBox>
      <BodyBox title={["onerow", "tworow"]} isTwoRows={true}>
        {[
          <div style={{ padding: "5px 0" }}>
            <div>ddddddd</div>
            <div>ddddddd</div>
            <div>ddddddd</div>
          </div>,
          <span>ddddd</span>,
        ]}
      </BodyBox> */}
      {/* <Box /> */}
      <PaginationTable />
    </div>
  );
}

export default App;
