import React from "react";
import MenuIcon from "../assets/icons/menu-icon.svg";
import ChickenIcon from "../assets/icons/chicken.svg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <HomeLink to="/">
        <img src={MenuIcon} alt="Menu icon" />
      </HomeLink>
      <Title>Mascota</Title>
      <TrackerLink to="/progresstracker">
        <img src={ChickenIcon} alt="Chick icon" />
      </TrackerLink>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeLink = styled(Link)`
  width: 40px;
  height: 40px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const TrackerLink = styled(Link)`
  width: 40px;
  height: 40px;
`;
