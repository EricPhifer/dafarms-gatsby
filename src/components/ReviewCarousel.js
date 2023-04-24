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
  position: absolute;
  bottom: 0;
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
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, minmax(auto, 1fr));
  justify-items: center;
  alight-content: center;
  overflow-x: auto;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Top = styled.div`
  max-width: 30rem;
  margin: 1rem 1rem 1rem 0;
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

const Quote = styled.blockquote`
  margin-top: 1rem;
  font-style: italic;
  &::before,
  &::after {
    content: '"';
  }
`

export default function ReviewCarousel() {
  const { imagecarousel } = useStaticQuery(graphql`
    query {
      imagecarousel: allSanityReviews {
        nodes {
          id
        }
      }
    }
  `)
  const { nodes } = imagecarousel
  return (
    <>
      {nodes.map(node => (
        <Section id="carousels-review" key={node.id}>
          <Slider>
            <Reviews className="reviews">
              <Review className="review" id="review1">
                <Content>
                  <Top>
                    <Quote>
                      Best. Beef. Ever. Cannot say enough good about Dennis &
                      Ann!
                    </Quote>
                  </Top>
                  <Bottom>
                    <H4>Darlene O.</H4>
                  </Bottom>
                </Content>
                <Snapper>
                  <Arrows to="#review4" className="prev">
                    <RxCaretLeft />
                  </Arrows>
                  <Arrows to="#review2" className="next">
                    <RxCaretRight />
                  </Arrows>
                </Snapper>
              </Review>
              <Review className="review" id="review2">
                <Content>
                  <Top>
                    <Quote>
                      Speed is most important to me, so when they got me my
                      order the same day I knew this was the right business to
                      work with!
                    </Quote>
                  </Top>
                  <Bottom>
                    <H4>Berry A.</H4>
                  </Bottom>
                </Content>
                <Snapper>
                  <Arrows to="#review1" className="prev">
                    <RxCaretLeft />
                  </Arrows>
                  <Arrows to="#review3" className="next">
                    <RxCaretRight />
                  </Arrows>
                </Snapper>
              </Review>
              <Review className="review" id="review3">
                <Content>
                  <Top>
                    <Quote>
                      I use a lot of energy running around and Dennis & Ann
                      provide the meat I need to sustain a healthy lifestyle!
                    </Quote>
                  </Top>
                  <Bottom>
                    <H4>Clark K.</H4>
                  </Bottom>
                </Content>
                <Snapper>
                  <Arrows to="#review2" className="prev">
                    <RxCaretLeft />
                  </Arrows>
                  <Arrows to="#review4" className="next">
                    <RxCaretRight />
                  </Arrows>
                </Snapper>
              </Review>
              <Review className="review" id="review4">
                <Content>
                  <Top>
                    <Quote>
                      I don't eat fish, so beef is a great alternative to get
                      all I need in my diet.
                    </Quote>
                  </Top>
                  <Bottom>
                    <H4>Arthur C.</H4>
                  </Bottom>
                </Content>
                <Snapper>
                  <Arrows to="#review3" className="prev">
                    <RxCaretLeft />
                  </Arrows>
                  <Arrows to="#review1" className="next">
                    <RxCaretRight />
                  </Arrows>
                </Snapper>
              </Review>
            </Reviews>
            <Nav to="#review1" />
            <Nav to="#review2" />
            <Nav to="#review3" />
            <Nav to="#review4" />
          </Slider>
        </Section>
      ))}
    </>
  )
}
