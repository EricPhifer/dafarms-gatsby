import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  height: 100%;
  position: relative;
  z-index: 0;
  img {
    position: absolute;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    height: calc(100% + 10rem);
  }
`

const Container = styled.div`
  width: 100%;
  height: 30%;
  position: absolute;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  color: var(--white);
  text-align: center;
  z-index: 10;
  h1,
  h2 {
    padding: 0;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    flex-flow: row wrap;
    height: auto;
    position: relative;
    top: 5rem;
  }
  @media only screen and (max-height: 600px) and (min-width: 884px) {
    flex-flow: column wrap;
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: 10rem;
  text-shadow: 0.1rem 0 0 var(--black), 0 0.1rem 0 var(--black),
    -0.1rem 0 0 var(--black), 0 -0.1rem 0 var(--black);
  // Mobile view
  @media only screen and (max-width: 615px) {
    font-size: 7rem;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    font-size: 7rem;
    margin: 0;
  }
`

const Motto = styled.h2`
  margin: 0;
  font-size: 5rem;
  text-shadow: 0.1rem 0 0 var(--black), 0 0.1rem 0 var(--black),
    -0.1rem 0 0 var(--black), 0 -0.1rem 0 var(--black);
  // Mobile view
  @media only screen and (max-width: 615px) {
    font-size: 4rem;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    font-size: 4rem;
  }
`

export default function StoryHero() {
  const { hero } = useStaticQuery(graphql`
    query {
      hero: allSanityHero {
        nodes {
          id
          alt
          tagline
          title
          image {
            asset {
              id
            }
            ...ImageWithPreview
          }
        }
      }
    }
  `)
  const { nodes } = hero
  return (
    <>
      {nodes.map(node => (
        <Header key={node.id}>
          {node.image ? (
            <SanityImage
              {...node.image}
              alt={node.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          ) : (
            <div />
          )}
          <Container>
            <Title>{node.title}</Title>
            <Motto>{node.tagline}</Motto>
          </Container>
        </Header>
      ))}
    </>
  )
}
