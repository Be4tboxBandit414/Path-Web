import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SubContainer,
  HeroImage,
  HeroOverlay,
  HeroText,
  HeroButton,
} from "./styles";
import Hero from "../../assets/hero.jpg";

export default function Landing({ setNavTheme }) {
  useEffect(() => {
    setNavTheme("landing");
  }, [setNavTheme]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <>
      <HeroText>
        A Journey of a Thousand Miles <br />
        Begins with a Single Step <br />- Lao Tzu
      </HeroText>
      <SubContainer>
        <Link to="/profile">
          <HeroButton>Begin Your Journey</HeroButton>
        </Link>
        <HeroButton>Paths</HeroButton>
      </SubContainer>
      <HeroOverlay>
        <HeroImage src={Hero} />
      </HeroOverlay>
    </>
  );
}
