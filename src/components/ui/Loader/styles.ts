import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.85);
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
`

export const SpinnerWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`

export const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 4px solid ${props => props.theme.colors.primaryLight};
  border-top-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`

export const InnerSpinner = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  border: 3px solid transparent;
  border-bottom-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite reverse;
`
