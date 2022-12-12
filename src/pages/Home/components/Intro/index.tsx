import {
  IntroContainer,
  IntroDetails,
  IntroItems,
  DetailsContainer,
  Item,
  Icon,
  ItensGroup,
} from './styles'
import { ShoppingCart, Package } from 'phosphor-react'
import CoffeLogo from '../../../../assets/CoffeeLogo.svg'

export function Intro() {
  return (
    <IntroContainer>
      <DetailsContainer>
        <IntroDetails>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </IntroDetails>
        <IntroItems>
          <ItensGroup>
            <Item>
              <Icon color="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </Icon>
              <h3>Compra simples e segura</h3>
            </Item>
            <Item>
              <Icon color="yellow-default">
                <Package size={16} weight="fill" />
              </Icon>
              <h3>Entrega rápida e rastreada</h3>
            </Item>
          </ItensGroup>
          <ItensGroup>
            <Item>
              <Icon color="base-text">
                <Package size={16} weight="fill" />
              </Icon>
              <h3>Embalagem mantém o café intacto</h3>
            </Item>
            <Item>
              <Icon color="purple-default">
                <Package size={16} weight="fill" />
              </Icon>
              <h3>O café chega fresquinho até você</h3>
            </Item>
          </ItensGroup>
        </IntroItems>
      </DetailsContainer>
      <img src={CoffeLogo} alt="Logo do site Coffe Delivery" />
    </IntroContainer>
  )
}
