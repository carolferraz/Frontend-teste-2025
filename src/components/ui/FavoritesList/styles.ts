import styled from 'styled-components'

export const FavoritesWrapper = styled.section`
  width: 100%;
  max-width: 82.5rem;
  margin: 0 auto;
  padding: 2.5rem 1.25rem;
  background-color: ${props => props.theme.colors.background};
`

export const FavoritesTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;

  @media (min-width: 760.5rem) {
    font-size: 2rem;
    text-align: left;
  }
`

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  background-color: ${props => props.theme.colors.background};

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

export const EmptyFavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  text-align: center;
`

export const EmptyFavoritesWrapper = styled.div`
  width: 100%;
  max-width: 23.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledHeartSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.colors.light};
  border: 0.125rem solid ${props => props.theme.colors.grayDetail || '#e0e0e0'};
  border-radius: 50%;
  padding: 0.125rem;
`

export const EmptyFavoritesText = styled.p`
  color: #666;
  font-size: 1rem;
`
