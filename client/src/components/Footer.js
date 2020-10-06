import React from "react";
import InstaIcon from "../assets/icons/instagram.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <Container>
      <img src={InstaIcon} alt="Instagram Icon" />
      <p>Terms and Conditions</p>
      <img src={TwitterIcon} alt="Twitter Icon" />
      <p>5 contacts are online</p>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
