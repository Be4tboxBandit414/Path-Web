import { useEffect } from "react";
import {
  Container,
  FirstName,
  LastName,
  SubContainer,
  ProfilePicture,
  WorkTitle,
  ProfileContainer,
  Experience,
  Email,
  SocialMedia,
  Inspiration,
} from "./styles";
import ProfileImg from "../../assets/profile.jpg";

export default function Profile({ setNavTheme }) {
  useEffect(() => {
    setNavTheme("profile");
  }, [setNavTheme]);
  return (
    <Container>
      <FirstName>Stanley</FirstName>
      <LastName>Nguyen</LastName>
      <SubContainer>
        <ProfilePicture src={ProfileImg} />
      </SubContainer>
      <ProfileContainer>
        <WorkTitle>React Frontend Engineer</WorkTitle>
        <Experience>Experience: 5 years</Experience>
        <Email>Email: snguyen414@gmail.com</Email>
        <SocialMedia>
          LinkedIn: https://www.linkedin.com/in/stanley-nguyen-973a6454/
        </SocialMedia>
      </ProfileContainer>
      <Inspiration>"Have Courage. Have Faith."</Inspiration>
    </Container>
  );
}
