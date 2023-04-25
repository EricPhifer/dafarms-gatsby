import { PortableText, defaultComponents } from '@portabletext/react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  margin: 2rem 0;
`

const Slider = styled.div`
  max-width: 80rem;
  min-height: 40rem;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
`

const Slides = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
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

const Slide = styled.li`
  padding-top: 15vh;
  margin-top: -15vh;
  width: 100%;
  height: 100%;
  margin-right: 5rem;
  scroll-snap-align: start;
  flex-shrink: 0;
  border-radius: 1rem;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  font-size: 10rem;
  color: var(--white);
  img {
    max-height: 50rem;
  }
  figcaption {
    width: 100%;
    padding: 0.5rem 1rem 0;
    background-color: var(--gray);
    color: var(--white);
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
  width: 100%;
  padding: 2rem;
  background-color: var(--gray);
  border-radius: 0 0 1rem 1rem;
  overflow-x: auto;
  p {
    font-size: 2rem;
    padding: 0.5rem 0;
    @media only screen and (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 500px) {
    height: 50%;
  }
  @media only screen and (max-height: 600px) {
    height: 50%;
  }
`

const H3 = styled.h3`
  font-size: 2rem;
  padding: 0.5rem 0 0;
`

export default function Hay() {
  const { hay } = useStaticQuery(graphql`
    query {
      hay: allSanityHay {
        nodes {
          id
          _rawContent
          title
          alt
          source
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
  const { nodes } = hay
  return (
    <Section id="carousels-image-with-words">
      <Slider>
        <Slides className="slides">
          {nodes.map((node, index) => (
            <Slide className="slide" id={`slide${index}`} key={node.id}>
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
                <H3>{node.title}</H3>
                <PortableText
                  value={node._rawContent}
                  components={defaultComponents}
                />
              </Content>
            </Slide>
          ))}
        </Slides>
        {nodes.map((node, index) => (
          <Nav to={`slide${index}`} key={node.id}>
            {index + 1}
          </Nav>
        ))}
      </Slider>
    </Section>
  )
}
