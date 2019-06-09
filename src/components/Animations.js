import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  0% {
    height: 0vh;
  },
  100% {
    height: 100vh;
  }
`

const slideUp = keyframes`
  0% {
    height: 100vh;
  },
  100% {
    height: 0vh;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const fadeInNav = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.2;
  }
`

const fadeOutNav = keyframes`
  from {
    opacity: 0.2;
  }
  to {
    opacity: 0;
  }
`

export {
  slideDown,
  fadeIn,
  fadeOut,
  fadeInNav,
  fadeOutNav
}