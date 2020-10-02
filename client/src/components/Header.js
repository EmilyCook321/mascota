import React from "react";
import MenuIcon from "../assets/icons/menu-icon.svg";
import ChickenIcon from "../assets/icons/chicken.svg";

import styled from "@emotion/styled";

const Header = () => {
  return (
    <Container>
      <MenuButton>
        <img src={MenuIcon} alt="Menu icon" />
      </MenuButton>
      <Title>Mascota</Title>
      <Chicken>
        <img src={ChickenIcon} alt="Chick icon" />
      </Chicken>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  margin: auto;
`;

const Chicken = styled.div`
  width: 50px;
  height: 50px;
`;

const MenuButton = styled.div`
  margin-right: auto;
  width: 40px;
  height: 40px;
`;
