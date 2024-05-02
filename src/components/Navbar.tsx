import { Tooltip } from "react-tooltip";
import { Icon, SearchIcon } from "./styles/Icons.style";
import { Nav, Title, SearchLink, NavLink } from "./styles/Navbar.style";

const Navbar = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", width: "100%", height: "80px" }}>
    <Title>
      <p data-tooltip-id="language">&#699;Ōlelo Hawai&#699;i</p>
    </Title>
    <Tooltip
      id="language"
      place="right"
      content="Hawaiian Language"
      border="2px solid #19210f"
      style={{ padding: "15px 20px", backgroundColor: "#e4edd8", fontFamily: "'Lato', sans-serif", fontSize: "16px", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", marginLeft: "5px", color: "#19210f", fontStyle: "italic" }}
    />
    <Nav>
      <NavLink to="/" style={{ textDecoration: "none" }}>
      <Icon className="material-symbols-outlined">cottage</Icon>
        <span className="linkName" data-tooltip-id="home">Hale</span>
        <Tooltip
          id="home"
          place="bottom"
          content="Home"
          border="2px solid #19210f"
          style={{ padding: "15px 20px", backgroundColor: "#e4edd8", fontFamily: "'Lato', sans-serif", fontSize: "16px", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", marginTop: "10px", color: "#19210f", fontStyle: "italic" }}
        />
      </NavLink>
      <NavLink to="/info" style={{ textDecoration: "none" }}>
      <Icon className="material-symbols-outlined">info</Icon>
        <span className="linkName">Information</span>
      </NavLink>
      <NavLink to="/explore" style={{ textDecoration: "none" }}>
      <Icon className="material-symbols-outlined">nest_eco_leaf</Icon>
        <span className="linkName">Explore</span>
      </NavLink>
      <NavLink to="/fun" style={{ textDecoration: "none" }}>
      <Icon className="material-symbols-outlined">ifl</Icon>
        <span className="linkName">Fun</span>
      </NavLink>
      <NavLink to="/resources" style={{ textDecoration: "none" }}>
      <Icon className="material-symbols-outlined">brand_family</Icon>
        <span className="linkName">Resources</span>
      </NavLink>
      <NavLink to="/contact" style={{ textDecoration: "none" }}>
      <Icon className="material-symbols-outlined">chat</Icon>
        <span className="linkName">Contact</span>
      </NavLink>
      <SearchLink><SearchIcon className="material-symbols-outlined">search</SearchIcon></SearchLink>
    </Nav>
    </div>
  );
}
 
export default Navbar;