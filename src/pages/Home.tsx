import { Tooltip } from "react-tooltip";
import { Aloha, BodyText, BodyTitle } from "./styles/Home.style";
import { Main } from "../global.style";
// import aloha from "../assets/a-l-o-h-a.png";


const Home = () => {
  return (
    <>
      <Aloha data-tooltip-id="hello">ALOHA</Aloha>
      <Tooltip
        id="hello"
        place="right"
        content="Hello"
        border="2px solid #19210f"
        style={{ padding: "15px 20px", backgroundColor: "#e4edd8", fontFamily: "'Lato', sans-serif", fontSize: "16px", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", marginLeft: "5px", color: "#19210f", fontStyle: "italic" }}
      />
      <Main>
        {/* <img src={aloha} alt="aloha" style={{ width: "400px" }} title="Photo courtesy of little_plant on Unsplash" /> */}
        <BodyText>
          <BodyTitle data-tooltip-id="welcome">E komo mai.</BodyTitle>
          <Tooltip
            id="welcome"
            place="right"
            content="Welcome"
            border="2px solid #19210f"
            style={{ padding: "15px 20px", backgroundColor: "#e4edd8", fontFamily: "'Lato', sans-serif", fontSize: "16px", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", marginLeft: "5px", color: "#19210f", fontStyle: "italic" }}
          />
          Hawaiian is a Polynesian language and critically endangered language of the Austronesian language family that takes its name from Hawaiʻi, the largest island in the tropical North Pacific archipelago where it developed. Hawaiian, along with English, is an official language of the US state of Hawaii. King Kamehameha III established the first Hawaiian-language constitution in 1839 and 1840.
        </BodyText>
      </Main>
    </>
  );
}
 
export default Home;