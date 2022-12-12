import { useState } from 'react'
import { Intro } from './components/Intro'
import {
  CoffeeCard,
  CoffeeDescription,
  CoffeesContainer,
  CoffeesTitle,
  ImgContainer,
  MainHome,
  TagsContainer,
} from './styles'
import tradicional from '../../assets/tradicional.svg'
import americano from '../../assets/americano.svg'
import cremoso from '../../assets/cremoso.svg'
import gelado from '../../assets/gelado.svg'
import cafecomleite from '../../assets/cafecomleite.svg'
import latte from '../../assets/latte.svg'
import capuccino from '../../assets/capuccino.svg'
import macchiato from '../../assets/macchiato.svg'
import mocaccino from '../../assets/mocaccino.svg'
import chocolate from '../../assets/chocolate.svg'
import cubano from '../../assets/cubano.svg'
import havaiano from '../../assets/havaiano.svg'
import arabe from '../../assets/arabe.svg'
import irlandes from '../../assets/irlandes.svg'

export function Home() {
  const [coffees, setCoffees] = useState([
    {
      name: 'Expresso Tradicional',
      img: tradicional,
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: [{ value: 'tradicional' }],
    },
    {
      name: 'Expresso Americano',
      img: americano,
      description: 'Expresso diluído, menos intenso que o tradicional',
      tags: [{ value: 'tradicional' }],
    },
    {
      name: 'Expresso Cremoso',
      img: cremoso,
      description: 'Café expresso tradicional com espuma cremosa',
      tags: [{ value: 'tradicional' }],
    },
    {
      name: 'Expresso Gelado',
      img: gelado,
      description: 'Bebida preparada com café expresso e cubos de gelo',
      tags: [{ value: 'tradicional' }, { value: 'gelado' }],
    },
    {
      name: 'Café com leite',
      img: cafecomleite,
      description: 'Meio a meio expresso tradicional com leite vaporizado',
      tags: [{ value: 'tradicional' }, { value: 'com leite' }],
    },
    {
      name: 'Latte',
      img: latte,
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      tags: [{ value: 'tradicional' }, { value: 'com leite' }],
    },
    {
      name: 'Capuccino',
      img: capuccino,
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      tags: [{ value: 'tradicional' }, { value: 'com leite' }],
    },
    {
      name: 'Macchiato',
      img: macchiato,
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      tags: [{ value: 'tradicional' }, { value: 'com leite' }],
    },
    {
      name: 'Moccacino',
      img: mocaccino,
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      tags: [{ value: 'tradicional' }, { value: 'com leite' }],
    },
    {
      name: 'Chocolate quente',
      img: chocolate,
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      tags: [{ value: 'especial' }, { value: 'com leite' }],
    },
    {
      name: 'Cubano',
      img: cubano,
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      tags: [
        { value: 'especial' },
        { value: 'alcoólico' },
        { value: 'gelado' },
      ],
    },
    {
      name: 'Havaiano',
      img: havaiano,
      description: 'Bebida adocicada preparada com café e leite de coco',
      tags: [{ value: 'especial' }],
    },
    {
      name: 'Árabe',
      img: arabe,
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      tags: [{ value: 'especial' }],
    },

    {
      name: 'Irlandês',
      img: irlandes,
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      tags: [{ value: 'especial' }, { value: 'alcoólico' }],
    },
  ])

  return (
    <>
      <Intro />
      <MainHome>
        <CoffeesTitle>Nossos cafés</CoffeesTitle>
        <CoffeesContainer>
          {coffees.map((coffee, index) => (
            <CoffeeCard key={index}>
              <ImgContainer>
                <img src={coffee.img} alt="" />
              </ImgContainer>
              <TagsContainer>
                {coffee.tags.map((tag) => (
                  <p key={tag.value}>{tag.value}</p>
                ))}
              </TagsContainer>
              <CoffeeDescription>
                <h3>{coffee.name}</h3>
                <p>{coffee.description}</p>
              </CoffeeDescription>
            </CoffeeCard>
          ))}
        </CoffeesContainer>
      </MainHome>
    </>
  )
}
