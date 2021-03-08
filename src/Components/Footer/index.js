import { useContext } from "react";
import { Container, LineBreak, SubContainer, FooterLink } from "./styles";
import { Context } from "../../Context";

export default function Footer() {
  const [navTheme] = useContext(Context);
  const footerStyles = {
    color: navTheme === "profile" ? "black" : "white",
    opacity: navTheme === "profile" ? 1 : 0.5,
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
