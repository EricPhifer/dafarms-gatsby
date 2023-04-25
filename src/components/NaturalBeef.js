import { PortableText, defaultComponents } from '@portabletext/react'
import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  max-width: 80rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  p:last-child {
    padding-bottom: 1.5rem;
  }
`

const ShadowCard = styled.div`
  margin: 2rem 1rem;
  border-radius: 1rem;
  p {
    padding: 0.5rem 0;
    line-height: 1;
  }
  img {
    width: 100%;
    margin: 1.5rem 0;
    position: relative;
    @media only screen and (max-width: 500px) {
      height: 15rem;
    }
    figcaption {
      padding: 0.5rem 1rem 0;
      width: 100%;
      background-color: var(--gray);
      color: var(--white);
      font-size: 1.5rem;
      text-align: right;
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

export default function NaturalBeef() {
  const { beef } = useStaticQuery(graphql`
    query {
      beef: allSanityBeef {
        nodes {
          id
          _rawContent
          alt
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
  const { nodes } = beef
  return (
    <>
      {nodes.map(node => (
        <Section id="sections-bottom-img" key={node.id}>
          <ShadowCard>
            <PortableText
              value={node._rawContent}
              components={defaultComponents}
            />
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
          </ShadowCard>
        </Section>
      ))}
    </>
  )
}
