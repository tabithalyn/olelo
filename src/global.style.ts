import styled from "styled-components";

export const Button = styled.button`
  padding: 10px;
  border-radius: 15px;
  border: none;
  color: blue;
  background-color: lightBlue;
  font-size: 15px;
  font-weight: bold;
`;

export const Title = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 40px;
  u {
    text-decoration: #1b74b5 wavy underline;
    text-decoration-skip-ink: none;
    height: 1.5em;
  }
  &:hover {
    cursor: help;
  }
`;

export const Main = styled.div`
  width: 80%;
  background-color: #F5EFEB;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #080707;
  padding: 30px;
  font-size: 16px;
  margin: 5% auto;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: 2px solid #003049;
  font-family: "Lato", sans-serif;
`;