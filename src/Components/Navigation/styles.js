import styled from "styled-components";
import { CaretDown } from "@styled-icons/boxicons-regular/CaretDown";
import { CaretUp } from "@styled-icons/boxicons-regular/CaretUp";

export const SubContainer = styled.div``;
export const LineBreak = styled.hr``;

export const CaretClose = styled(CaretDown)`
  margin-left: 2px;
`;
export const CaretOpen = styled(CaretUp)`
  margin-left: 2px;
`;

export const Title = styled.div`
  font-size: 50px;
  // padding-bottom: 32px;
  text-align: center;
  // color: #FFFFFF;
  font-family: "Anton", sans-serif;
  margin-left: 45rem;
  position: relative;
  bottom: 10px;
  font-family: "Lobster", cursive;
  text-decoration: none;
`;
export const NavLink = styled.a`
  text-decoration: none;
  font-size: 25px;
  margin-left: 12.5rem;
  position: relative;
  top: 6px;
  cursor: pointer;
  font-weight: 700;
`;

export const NavContainer = styled.div`
  text-align: center;
  display: inline-flex;
  opacity: 0.5;
  position: absolute;
  top: 25px;
  color: white;
`;

export const DropDownContainer = styled.div`
  width: 10.5em;
  margin: 0 auto;
  cursor: pointer;
`;

export const DropDownHeader = styled.div`
  //   margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  //   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  //   border: 1px solid black;
  //   color: #3faffa;
  //   background: #ffffff;
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  position: absolute;
  left: 25px;
  padding: 20px;
  margin: 0;
  // padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 20%;
  box-sizing: border-box;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;
