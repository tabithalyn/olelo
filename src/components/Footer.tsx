import { Tooltip } from "react-tooltip";
import { Foot, FootTitle } from "./styles/Footer.style";

const Footer = () => {
  return (
    <Foot>
      <FootTitle>
        <span data-tooltip-id="ty">Mahalo nui loa.</span>
      </FootTitle>
      <Tooltip
        id="ty"
        place="right"
        content="Thank you very much."
        border="2px solid #19210f"
        style={{ padding: "15px 20px", backgroundColor: "#e4edd8", fontFamily: "'Lato', sans-serif", fontSize: "16px", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", marginLeft: "5px", color: "#19210f", fontStyle: "italic" }}
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum sed purus in euismod. Nam et elit in ipsum accumsan posuere quis vel justo. Integer vitae urna augue.
    </Foot>
  );
}
 
export default Footer;