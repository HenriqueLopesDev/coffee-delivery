import styled from 'styled-components'

export const MainHome = styled.main``

export const CoffeesTitle = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
`
export const CoffeesContainer = styled.div`
  display: grid;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  margin-top: 3.375rem;
`

export const CoffeeCard = styled.div`
  display: flex;
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
`

export const CoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  h3,
  p {
    text-align: center;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    line-height: 1.3;
    font-weight: 400;
    font-size: 0.875rem;
    padding: 0 1.25rem;
  }
`

export const ImgContainer = styled.div`
  position: absolute;
  margin-top: -15rem;
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  p {
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    text-transform: uppercase;
    line-height: 1.3;
    font-weight: 700;
  }
`
