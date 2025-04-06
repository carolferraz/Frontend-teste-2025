import styled from 'styled-components'

export const CoursesWrapper = styled.div`
  width: 100%;
  max-width: 82.5rem;
  margin: 0 auto;
  padding: 2.5rem 1.25rem;
  background-color: ${props => props.theme.colors.background};
`

export const CoursesTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
    text-align: left;
  }
`

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  background-color: ${props => props.theme.colors.background};

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  & > * {
    width: 100%;

    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
      width: calc(50% - 0.75rem);
    }

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: calc(33.333% - 1rem);
    }

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: calc(25% - 1.125rem);
    }
  }
`
