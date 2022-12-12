import styled from 'styled-components'

export type colorsOptions =
  | 'yellow-dark'
  | 'purple-default'
  | 'yellow-default'
  | 'base-text'

interface iconColors {
  color: colorsOptions
}

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  padding: 5.75rem 0;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const IntroDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
  }

  h2 {
    font-size: 1.25rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
  }
`

export const IntroItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`
export const ItensGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Icon = styled.div<iconColors>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  color: #fff;
  background-color: ${(props) => props.theme[props.color]};
  border-radius: 1000px;
`
