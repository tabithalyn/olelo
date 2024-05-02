import { Tooltip } from "react-tooltip";
import { Title, Main } from "../global.style";

const Fun = () => {
  return (
    <Main>
      <Title><u data-tooltip-id="fun">Le&#699;ale&#699;a</u></Title>
        <Tooltip
          id="fun"
          place="right"
          content="Fun"
          border="2px solid #19210f"
          style={{ padding: "15px 20px", backgroundColor: "#e4edd8", fontFamily: "'Lato', sans-serif", fontSize: "16px", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", marginLeft: "5px", color: "#19210f", fontStyle: "italic" }}
        />
    </Main>
  );
}
 
export default Fun;