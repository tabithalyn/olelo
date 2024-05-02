import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #F0D8A4;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
`;

export const BodyTitle = styled.div`
  font-family: "Special Elite", system-ui;
  font-size: 20px;
  &:hover {
    cursor: help;
  }
`;

export const BodyText = styled.div`
  width: 85%;
  padding: 30px;
  font-family: "Lato", sans-serif;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
`;

export const Aloha = styled.div`
  display: flex;
  justify-content: center;
  font-size: 75px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  letter-spacing: -1px;
  color: #F5EFEB;
  transform: rotate(-10deg);
  background-color: #912F24;
  padding: 2px 18px;
  position: absolute;
  left: 70px;
  top: 150px;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: 2px solid #003049;
  &:hover {
    cursor: help;
  }
`;