import styled from "styled-components";
import ReactPlayer from "react-player/lazy";
const Player = () => {
  return (
    <Wrapper className="container">
      <h3 className="title">Erklärvideo zu den NFTs</h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=YJRg4_3RjwY" />
    </Wrapper>
  );
};

export default Player;
const Wrapper = styled.section`
  div,
  video,
  iframe {
    max-width: var(--fixed-width) !important;
    width: 100% !important;
    margin: auto;
  }
  /* @media (min-width: 750px) {
  } */
`;
