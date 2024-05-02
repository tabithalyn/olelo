import { Tooltip } from "react-tooltip";
import { Main, Title } from "../global.style";

const Information = () => {
  return (
    <>
      <Main>
        <Title><u data-tooltip-id="info">&#699;Ike</u></Title>
        <Tooltip
          id="info"
          place="right"
          content="Information"
          border="2px solid #19210f"
          style={{ padding: "15px 20px", backgroundColor: "#e4edd8", fontFamily: "'Lato', sans-serif", fontSize: "16px", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", marginLeft: "5px", color: "#19210f", fontStyle: "italic" }}
        />
        <p>
        &#699;Okina is the modern Hawaiian name for the symbol (a letter) that represents the glottal stop. It was formerly known as &#699;u&#699;ina ("snap"). For examples of the &#699;okina, consider the Hawaiian words Hawai&#699;i and O&#699;ahu (often simply Hawaii and Oahu in English orthography). In Hawaiian, these words are pronounced <i>[hʌ&#x2C8;&#x28B;ʌi.&#x294;i]</i> and <i>[o&#x2C8;ʔʌ.hu]</i>, and are written with an &#699;okina where the glottal stop is pronounced.
        </p>
      </Main>
    </>
  );
}
 
export default Information;