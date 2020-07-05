import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

const Wrapper = styled.div`
  background-color: rgba(52, 152, 219, 1);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const PlayerWrapper = styled.div`
  margin-top: 5vh;
  background-color: #ff6b81;
  position: relative;
  padding-top: 56.25%;
  width: 100%;
`;

const Video = styled(ReactPlayer)`
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
`;

export default () => {
  return (
    <Wrapper>
      <PlayerWrapper className="playerWrapper">
        <Video
          url="https://www.youtube.com/watch?v=dK8i5uwBM9c"
          controls
          playing={false}
          width="100%"
          height="100%"
        />
      </PlayerWrapper>
    </Wrapper>
  );
};
