import { PortableText, defaultComponents } from '@portabletext/react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  min-height: 20rem;
  margin: 5rem 0;
  text-align: center;
`

const Slider = styled.div`
  margin: 0 auto;
  perspective: 10rem;
`

const Reviews = styled.ol`
  max-width: 80rem;
  display: flex;
  align-items: baseline;
  margin: 0 auto;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scroll-margin-top: 10rem;
  li {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }
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

const Review = styled.li`
  padding-top: 50vh;
  margin-top: -50vh;
  width: 100%;
  position: relative;
  border-radius: 1rem;
  background: var(--white);
  flex: 0 0 100%;
`

const Snapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .prev svg {
    bottom: 8%;
    left: 0;
    @media only screen and (max-width: 900px) {
      bottom: 5%;
    }
    @media only screen and (max-width: 700px) {
      bottom: 10%;
    }
  }
  .next svg {
    bottom: 8%;
    right: 0;
    @media only screen and (max-width: 900px) {
      bottom: 5%;
    }
    @media only screen and (max-width: 700px) {
      bottom: 10%;
    }
  }
`

const Arrows = styled(Link)`
  width: 100%;
  height: 100%;
  svg {
    font-size: 5rem;
    color: var(--gray);
    position: absolute;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 50%;
    &:hover {
      color: var(--blue);
    }
  }
`

const Nav = styled(Link)`
  width: 0.75rem;
  height: 0.75rem;
  margin: 0.25rem 0.75rem 0.5rem 0;
  padding: 0.75rem;
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
  width: 80%;
  min-height: 20rem;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, minmax(auto, 1fr));
  justify-items: center;
  alight-content: center;
  overflow-x: auto;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 687px) {
    min-height: 30rem;
  }
`

const Top = styled.div`
  max-width: 50rem;
  margin: 1rem 1rem 1rem 0;
  p {
    margin-top: 1rem;
    font-style: italic;
    &::before,
    &::after {
      content: '"';
    }
  }
`

const Bottom = styled.div`
  width: 70%;
  margin: 1rem 0 3rem;
  text-align: right;
`

const H4 = styled.h4`
  font-size: 1.5rem;
  &::before {
    content: '- ';
  }
`

export default function ReviewCarousel() {
  const { reviews } = useStaticQuery(graphql`
    query {
      reviews: allSanityReviews {
        nodes {
          id
          _rawQuote
          name
        }
      }
    }
  `)
  const { nodes } = reviews
  return (
    <Section id="carousels-review">
      <Slider>
        <Reviews className="reviews">
          {nodes.map((node, index) => (
            <Review className="review" id={`review${index}`} key={node.id}>
              <Content>
                <Top>
                  <PortableText
                    value={node._rawQuote}
                    components={defaultComponents}
                  />
                </Top>
                <Bottom>
                  <H4>{node.name}</H4>
                </Bottom>
              </Content>
              <Snapper>
                <Arrows
                  to={`#review${index !== 0 ? index - 1 : index.count}`}
                  className="prev"
                >
                  <RxCaretLeft />
                </Arrows>
                <Arrows
                  to={`#review${index.count !== index ? index + 1 : 0}`}
                  className="next"
                >
                  <RxCaretRight />
                </Arrows>
              </Snapper>
            </Review>
          ))}
        </Reviews>
        {nodes.map((node, index) => (
          <Nav to={`#review${index}`} key={node.id} />
        ))}
      </Slider>
    </Section>
  )
}
