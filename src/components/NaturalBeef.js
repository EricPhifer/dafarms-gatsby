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
  padding: 3rem;
  box-shadow: 0.2rem 0.2rem 1rem var(--gray);
  border-radius: 1rem;
  p {
    padding: 0.5rem 0;
    line-height: 1;
  }
  img {
    width: 100%;
    height: 30rem;
    margin: 1.5rem 0;
    position: relative;
    @media only screen and (max-width: 500px) {
      height: 15rem;
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 2rem;
  }
`

const H2 = styled.h2`
  margin: 1rem 0;
`

export default function SectionBottomImg() {
  const { section } = useStaticQuery(graphql`
    query {
      section: allSanitySection {
        nodes {
          image {
            asset {
              id
            }
            ...ImageWithPreview
          }
          id
          _rawContent
          alt
          title
        }
      }
    }
  `)
  const { nodes } = section
  return (
    <>
      {nodes.map(node => (
        <Section id="sections-bottom-img" key={node.id}>
          <ShadowCard>
            <H2>{node.title}</H2>
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
          </ShadowCard>
        </Section>
      ))}
    </>
  )
}
