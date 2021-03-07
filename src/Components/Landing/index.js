import { useEffect } from "react";
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
        <HeroButton>Begin Your TEST</HeroButton>
        <HeroButton>Paths</HeroButton>
      </SubContainer>
      <HeroOverlay>
        <HeroImage src={Hero} />
      </HeroOverlay>
    </>
  );
}
