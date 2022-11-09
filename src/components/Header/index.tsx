import Logo from '../../assets/Logo.svg'
import { Navbar, ActionContainer, CityInfo, Cartinfo, NavContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
    return(
        <Navbar>
            <NavContainer>
                <NavLink to='/' title="Início">
                    <img src={Logo} alt="" />
                </NavLink>
                <ActionContainer>
                    <CityInfo>
                        <MapPin size={22} weight="fill"/>
                        <p>Porto Alegre, RS</p>
                    </CityInfo>
                    <Cartinfo>
                        <ShoppingCart  size={22} weight="fill"/>
                    </Cartinfo>
                </ActionContainer>
            </NavContainer>
        </Navbar>
    )
}