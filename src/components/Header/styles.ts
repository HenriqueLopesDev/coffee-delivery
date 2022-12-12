import styled from 'styled-components'

export const Navbar = styled.header`
  padding: 2rem 0;
`

export const NavContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  img {
    height: 2.5rem;
    cursor: pointer;
  }
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const BaseInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
`

export const CityInfo = styled(BaseInfo)`
  gap: 0.25rem;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  p {
    font-size: 0.875rem;
  }
`

export const Cartinfo = styled(BaseInfo)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
