import { PortableText, defaultComponents } from '@portabletext/react'
import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  max-width: 108rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  p:last-child {
    padding-bottom: 1.5rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  p {
    padding: 0.5rem 0;
  }
  @media only screen and (max-width: 1080px) {
    display: flex;
    flex-flow: column-reverse nowrap;
  }
`

const Right = styled.div`
  margin: 0;
  img {
    max-height: 50rem;
    width: 100%;
    height: 100%;
    position: relative;
  }
  figcaption {
    padding: 0.5rem 1rem 0;
    width: 100%;
    background-color: var(--gray);
    color: var(--white);
    font-size: 1.5rem;
    text-align: right;
  }
`

const Left = styled.div`
  margin: 0;
  padding: 0 2rem;
  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`
export default function StandardAbout() {
  const { about } = useStaticQuery(graphql`
    query {
      about: allSanityAbout {
        nodes {
          id
          alt
          source
          _rawContent
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
  const { nodes } = about
  return (
    <>
      {nodes.map(node => (
        <Section id="standard-about" key={node.id}>
          <Grid>
            <Left>
              <PortableText
                value={node._rawContent}
                components={defaultComponents}
              />
            </Left>
            <Right>
              {node.image ? (
                <SanityImage
                  {...node.image}
                  alt={node.alt}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              ) : (
                <div />
              )}
              <figcaption>
                {node.source ? `Source: ${node.source}` : ''}
              </figcaption>
            </Right>
          </Grid>
        </Section>
      ))}
    </>
  )
}
