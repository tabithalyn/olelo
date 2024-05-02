import { Tooltip } from "react-tooltip";
import { Main, Title } from "../global.style";

const Explore = () => {
  return (
    <>
      <Main>
      <Title><u data-tooltip-id="explore">Makahi&#699;o</u></Title>
        <Tooltip
          id="explore"
          place="right"
          content="Explore"
          border="2px solid #19210f"
          style={{ padding: "15px 20px", backgroundColor: "#e4edd8", fontFamily: "'Lato', sans-serif", fontSize: "16px", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", marginLeft: "5px", color: "#19210f", fontStyle: "italic" }}
        />
      </Main>
    </>
  );
}
 
export default Explore;