import styled from "styled-components";
import Hero from "./assets/hero.jpg";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  // margin-top: 2rem;
`;

export const SubContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 48%;
  z-index: 5;
`;

export const HeroImage = styled.img`
  // background-image: url(${Hero});
  height: 100vh;
  width: 100vw;
  // background-size: cover;
  object-fit: cover;
  opacity: 0.4;
}
`;
export const HeroText = styled.h1`
  position: absolute;
  width: 100%;
  top: 23%;
  text-align: center;
  font-size: 50px;
  color: white;
`;

export const HeroButton = styled.button`
  // background-color: transparent;
  background-color: #ffa601;
  cursor: pointer;
  outline: none;
  padding: 25px;
  color: white;
  margin: 2rem;
  border-radius: 22px;
  font-size: 21px;
`;

export const HeroOverlay = styled.header`
  color: white;
  height: 100vh;
  width: 100vw;
  background: black;
  overflow: hidden;
  // background: #C33764;  /* fallback colour. Make sure this is just one solid colour. */
  // background: -webkit-linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8));
  // background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)); /* The least supported option. */
`;
