import { useEffect, useContext } from "react";
import { Context } from "../../Context";
import {
  SubContainer,
  HeroImage,
  HeroOverlay,
  HeroText,
  HeroButton,
} from "./styles";
import Hero from "../../assets/hero.jpg";

export default function Landing() {
  const [navTheme, setNavTheme] = useContext(Context);
  useEffect(() => {
    setNavTheme("landing");
  }, [setNavTheme]);

  return (
    <>
      <HeroText>
        A Journey of a Thousand Miles <br />
        Begins with a Single Step <br />- Lao Tzu
      </HeroText>
      <SubContainer>
        <HeroButton>Begin Your Journey</HeroButton>
        <HeroButton>Paths</HeroButton>
      </SubContainer>
      <HeroOverlay>
        <HeroImage src={Hero} />
      </HeroOverlay>
    </>
  );
}
