import React from "react";
import styled from "styled-components";
import DISCORD from "../assets/discord.png";
import YOUTUBE from "../assets/youtube.png";
import LOGO from "../assets/logo.png";

const SocialLinks = () => {
  return (
    <Wrapper className="container ">
      <a href="https://team-cgs.de/" target="blank" className="col title">
        <img src={LOGO} alt="" className="img" />
        Home
      </a>
      <a
        href="https://discord.gg/JKgePEH6uJ"
        target="blank"
        className="col title"
      >
        <img src={DISCORD} alt="" className="img" />
        Discord
      </a>
      <a href="https://bit.ly/3DrtP4r" target="blank" className="col title">
        <img src={YOUTUBE} alt="" className="img" />
        Youtube
      </a>
    </Wrapper>
  );
};

export default SocialLinks;
const Wrapper = styled.section`
  padding: 2rem 0;
  margin: auto;

  a {
    color: white;
    color: var(--primary-400);
  }

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 3rem;
  place-content: center;
  place-items: center;
  @media (min-width: 600px) {
    max-width: calc(var(--fixed-width) / 1.5);
    img {
      height: 100px;
    }
  }
`;
