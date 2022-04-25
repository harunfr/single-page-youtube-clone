import React from 'react';
import {
  Container,
  Wrapper,
  SearchBar,
  Text,
  SandwichIcon,
  Logo,
  SearchIcon,
  MicrophoneIcon,
  UploadIcon,
  AppsIcon,
  NotificationsIcon,
  ThemeIcon,
} from './styles';

function Header() {
  return (
    <Container>
      <Wrapper gap=".8rem">
        <SandwichIcon />
        <Wrapper>
          <Logo />
          <Text>YouTube</Text>
        </Wrapper>
      </Wrapper>

      <Wrapper gap=".8rem">
        <Wrapper>
          <SearchBar />
          <SearchIcon />
        </Wrapper>
        <MicrophoneIcon />
      </Wrapper>

      <Wrapper gap="2rem">
        <UploadIcon />
        <AppsIcon />
        <NotificationsIcon />
        <ThemeIcon />
      </Wrapper>
    </Container>
  );
}

export default Header;
