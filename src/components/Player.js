import styled from "styled-components";
import ReactPlayer from "react-player/lazy";
const Player = () => {
  return (
    <Wrapper className="container">
      <h3 className="title">Erklärvideo zu den NFTs</h3>
      <ReactPlayer
        url="https://vimeo.com/733570994/2071c1f29f"
        playing={true}
        controls={true}
        volume={1}
      />
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
