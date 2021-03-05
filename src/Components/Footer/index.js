import { useContext } from "react";
import { Container, LineBreak, SubContainer, FooterLink } from "./styles";
import { ThemeContext } from "../../App";

export default function Footer() {
  const footerTheme = useContext(ThemeContext);
  const footerStyles = {
    color: footerTheme === "profile" ? "black" : "white",
    opacity: footerTheme === "profile" ? 1 : 0.5,
  };
  return (
    <>
      <Container style={footerStyles}>
        <LineBreak />
        <SubContainer>
          <FooterLink onclick={() => console.log("About")}>About Us</FooterLink>
          <FooterLink>Our Team</FooterLink>
          <FooterLink>Help</FooterLink>
          <FooterLink>Paths</FooterLink>
        </SubContainer>
      </Container>
    </>
  );
}
