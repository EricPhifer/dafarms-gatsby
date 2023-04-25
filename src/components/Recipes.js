import { PortableText, defaultComponents } from '@portabletext/react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  margin: 2rem 0;
  text-align: center;
`

const Slider = styled.div`
  max-width: 80rem;
  min-height: 40rem;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`

const Cards = styled.div`
  height: 90%;
  display: flex;
  align-items: baseline;
  text-align: left;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--black);
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::marker {
    position: absolute;
    top: 0;
  }
`

const Card = styled.li`
  padding-top: 15vh;
  margin-top: -15vh;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  flex-shrink: 0;
  border-radius: 1rem;
  background: var(--white);
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  font-size: 10rem;
  color: var(--black);
  img {
    max-height: 50rem;
    width: 100%;
    margin: 0 2rem;
    box-shadow: 0.3rem 0.3rem 1rem var(--gray);
  }
  figcaption {
    padding: 0.5rem 1rem 0;
    width: 100%;
    font-size: 1.5rem;
    text-align: right;
  }
  &:target {
    transform: scale(0.8);
  }
`

const Nav = styled(Link)`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.25rem 0.25rem 0.5rem 0;
  padding: 1.5rem;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--gray);
  color: var(--white);
  text-decoration: none;
  &:active {
    top: 0.1rem;
  }
  &:focus {
    background: var(--blue);
    color: var(--black);
  }
  &:hover {
    background: var(--blue);
    color: var(--black);
  }
`

const Content = styled.div`
  width: 96%;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  overflow-x: auto;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const H3 = styled.h3`
  width: 100%;
  font-size: 4rem;
  padding: 1rem 0 0.5rem;
`

const Left = styled.div`
  margin: 1rem 1rem 1rem 0;
`

const Right = styled.div`
  margin: 1rem 0 3rem;
  grid-column: 2 / span 2;
  p {
    font-size: 2rem;
    padding: 0.5rem 0;
    @media only screen and (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 900px) {
    grid-column: 1;
  }
`

const H4 = styled.h4`
  font-size: 2.5rem;
  padding-bottom: 1rem;
`

const List = styled.ul`
  list-style-type: none;
  margin-top: 1rem;
`

const Item = styled.li`
  font-size: 1.5rem;
  padding: 0.5rem 0;
`

export default function Recipes() {
  const { recipes } = useStaticQuery(graphql`
    query {
      recipes: allSanityRecipes {
        nodes {
          id
          _rawInstructions
          alt
          source
          title
          image {
            asset {
              id
            }
            ...ImageWithPreview
          }
          ingredients {
            _key
            amount
            name
          }
        }
      }
    }
  `)
  const { nodes } = recipes
  return (
    <Section id="carousels-card">
      {nodes.map((node, index) => (
        <Nav to={`#card${index}`}>{index + 1}</Nav>
      ))}
      <Slider>
        <Cards className="cards">
          {nodes.map(node => (
            <Card className="card" id="card1" key={node.id}>
              <H3>{node.title}</H3>
              <SanityImage
                {...node.image}
                alt={node.alt}
                style={{
                  objectFit: 'cover',
                  auto: 'format',
                }}
              />
              <figcaption>
                {node.source ? `Source: ${node.source}` : ''}
              </figcaption>
              <Content>
                <Left>
                  <H4>Ingredients</H4>
                  <List>
                    {node.ingredients.map(i => (
                      <Item key={i._key}>
                        {i.amount} {i.name}
                      </Item>
                    ))}
                  </List>
                </Left>
                <Right>
                  <H4>Directions:</H4>
                  <PortableText
                    value={node._rawInstructions}
                    components={defaultComponents}
                  />
                </Right>
              </Content>
            </Card>
          ))}
        </Cards>
      </Slider>
    </Section>
  )
}
