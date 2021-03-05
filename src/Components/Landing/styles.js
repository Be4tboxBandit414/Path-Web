import styled from "styled-components";

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
  // background-color: #e79600;
  // cursor: pointer;
  // outline: none;
  padding: 25px;
  // color: white;
  margin: 2rem;
  // border-radius: 22px;
  font-size: 21px;
  // box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  background: #f6a53d;
  background-image: -webkit-linear-gradient(top, #f6a53d, #d0481e);
  background-image: -moz-linear-gradient(top, #f6a53d, #d0481e);
  background-image: -ms-linear-gradient(top, #f6a53d, #d0481e);
  background-image: -o-linear-gradient(top, #f6a53d, #d0481e);
  background-image: -webkit-gradient(to bottom, #f6a53d, #d0481e);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  color: #ffffff;
  font-family: Brush Script MT;
  // font-size: 40px;
  font-weight: 100;
  // padding: 40px;
  -webkit-box-shadow: 1px 1px 20px 0 #000000;
  -moz-box-shadow: 1px 1px 20px 0 #000000;
  box-shadow: 1px 1px 20px 0 #000000;
  text-shadow: 1px 1px 20px #000000;
  border: solid #000000 0;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
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
