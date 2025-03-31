import styled from 'styled-components'

export const CoursesWrapper = styled.div`
  width: 100%;
  max-width: 82.5rem;
  margin: 0 auto;
  padding: 2.5rem 1.25rem;
  background-color: ${props => props.theme.colors.background.light};
`

export const CoursesTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;

  @media (min-width: 760.5rem) {
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
  background-color: ${props => props.theme.colors.background.light};

  @media (min-width: 48rem) {
    /* 760.5rem */
    flex-direction: row;
    flex-wrap: wrap;
  }

  & > * {
    width: 100%;

    @media (min-width: 37.5rem) {
      // 600px
      width: calc(50% - 0.75rem);
    }

    @media (min-width: 56.25rem) {
      // 900px
      width: calc(33.333% - 1rem);
    }

    @media (min-width: 75rem) {
      // 1200px
      width: calc(25% - 1.125rem);
    }
  }
`
