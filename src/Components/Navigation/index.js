import { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import {
  DropDownContainer,
  DropDownHeader,
  Title,
  NavContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
  CaretClose,
  CaretOpen,
  NavLink,
  SubContainer,
} from "./styles";
import { Link } from "react-router-dom";
import Search from "./Search/Serach";

function Navigation() {
  const navTheme = useContext(ThemeContext);
  const navStyles = {
    color: navTheme === "profile" ? "black" : "white",
    opacity: navTheme === "profile" ? 1 : 0.5,
    textDecoration: "none",
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = () => {
    setIsOpen(false);
  };

  const categories = ["Technology", "Design", "Business"];

  return (
    <NavContainer style={navStyles}>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          Paths
          {isOpen ? (
            <CaretOpen size="20"></CaretOpen>
          ) : (
            <CaretClose size="20"></CaretClose>
          )}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {categories.map((option, i) => (
                <ListItem onClick={() => onOptionClicked(option)} key={i}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      <Search />
      <Link style={navStyles} to="/">
        <Title>Path</Title>
      </Link>
      <SubContainer>
        <NavLink onClick={() => console.log("About Nav")}>About Us</NavLink>
        <NavLink>Sign In</NavLink>
        <NavLink>Sign Up</NavLink>
      </SubContainer>
    </NavContainer>
  );
}

export default Navigation;
