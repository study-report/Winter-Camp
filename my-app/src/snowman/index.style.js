import styled from "@emotion/styled";

export const SnowMan = styled.div`
  @keyframes blink {
    to {
      transform: scaleY(0.1);
    }
  }

  .blink {
    animation-name: blink;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: 0 140px;
  }
`;
