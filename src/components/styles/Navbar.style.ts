import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.div`
  font-size: 25px;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  width: 30%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 20px;
  position: absolute;
  left: 2%;
  top: 3%;
  &:hover {
    cursor: help;
  }
`;

export const Nav = styled.div`
  width: 68%;
  height: 80px;
  position: absolute;
  top: 3%;
  left: 30%;
  padding: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-wrap: wrap;
`;

export const NavLink = styled(Link)`
  padding: 0 20px 0 5px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  .linkName {
    text-decoration: none;
    font-size: 16px;
    text-align: center;
    color: #4F482A;
    font-family: "Special Elite", system-ui;
    position: relative;
      &:hover {
        color: #70663a;
        cursor: pointer;
        &::before {
          transform: scaleX(1);
        }
      }
      &::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 1.5px;
        bottom: 0;
        left: 0;
        background-color: #70663a;
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }
  }
`;

export const SearchLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  padding: 0 30px;
  height: 100%;
  text-align: center;
  color: #F0D8A4;
  margin-left: 20px;
  background-color: #823717;
  font-family: "Special Elite", system-ui;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: 2px solid #003049;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #e0c68d;
    background-color: #bf8726;
    cursor: pointer;
  }
`;