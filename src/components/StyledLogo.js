import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const Logo = styled.h1`
    animation: ${Animation} infinite 5s linear;
    border-bottom: 5px solid red;
    pointer-events: none;
    user-select: none;
`;