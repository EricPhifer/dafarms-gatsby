import { Link, graphql, useStaticQuery } from 'gatsby'
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

const RandomOne = styled.div`
  width: 100%;
  height: 50rem;
  border-radius: 1rem 1rem 0 0;
  background-image: url(https://source.unsplash.com/random/?nature);
  background-position: center center;
  background-size: cover;
  @media only screen and (max-width: 500px) {
    height: 30rem;
  }
  @media only screen and (max-height: 600px) {
    height: 30rem;
  }
`

const RandomTwo = styled.div`
  width: 100%;
  height: 50rem;
  border-radius: 1rem 1rem 0 0;
  background-image: url(https://source.unsplash.com/random/?trees);
  background-position: center center;
  background-size: cover;
  @media only screen and (max-width: 500px) {
    height: 30rem;
  }
  @media only screen and (max-height: 600px) {
    height: 30rem;
  }
`

const RandomThree = styled.div`
  width: 100%;
  height: 50rem;
  border-radius: 1rem 1rem 0 0;
  background-image: url(https://source.unsplash.com/random/?architecture);
  background-position: center center;
  background-size: cover;
  @media only screen and (max-width: 500px) {
    height: 30rem;
  }
  @media only screen and (max-height: 600px) {
    height: 30rem;
  }
`

const RandomFour = styled.div`
  width: 100%;
  height: 50rem;
  border-radius: 1rem 1rem 0 0;
  background-image: url(https://source.unsplash.com/random/?mountains);
  background-position: center center;
  background-size: cover;
  @media only screen and (max-width: 500px) {
    height: 30rem;
  }
  @media only screen and (max-height: 600px) {
    height: 30rem;
  }
`

const Content = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: var(--gray);
  border-radius: 0 0 1rem 1rem;
  overflow-x: auto;
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

const Paragraph = styled.p`
  font-size: 2rem;
  padding: 0.5rem 0;
  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`

export default function ImgCarouselWithWords() {
  const { imagecarousel } = useStaticQuery(graphql`
    query {
      imagecarousel: allSanityImagecarousel {
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
        <Section id="carousels-image-with-words" key={node.id}>
          <Slider>
            <Slides className="slides">
              <Slide className="slide" id="slide1">
                <RandomOne />
                <Content>
                  <H3>Naturally, You Must Be Thinking "How Stunning..."</H3>
                  <Paragraph>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine.I am so happy, my dear friend, so absorbed in the
                    exquisite sense of mere tranquil existence, that I neglect
                    my talents. I should be incapable of drawing a single stroke
                    at the present moment; and yet I feel that I never was a
                    greater artist than now.
                  </Paragraph>
                </Content>
              </Slide>
              <Slide className="slide" id="slide2">
                <RandomTwo />
                <Content>
                  <H3>Don't Forget, Tomorrow's Arbor Day</H3>
                  <Paragraph>
                    When, while the lovely valley teems with vapour around me,
                    and the meridian sun strikes the upper surface of the
                    impenetrable foliage of my trees, and but a few stray gleams
                    steal into the inner sanctuary, I throw myself down among
                    the tall grass by the trickling stream; and, as I lie close
                    to the earth, a thousand unknown plants are noticed by me:
                    when I hear the buzz of the little world among the stalks,
                    and grow familiar with the countless indescribable forms of
                    the insects and flies, then I feel the presence of the
                    Almighty, who formed us in his own image, and the breath...
                  </Paragraph>
                </Content>
              </Slide>
              <Slide className="slide" id="slide3">
                <RandomThree />
                <Content>
                  <H3>People Have Built Some Pretty Magnifecent Things</H3>
                  <Paragraph>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.
                  </Paragraph>
                </Content>
              </Slide>
              <Slide className="slide" id="slide4">
                <RandomFour />
                <Content>
                  <H3>Neither Height, Nor Depth...</H3>
                  <Paragraph>
                    For I am convinced that neither death nor life, neither
                    angels nor demons, neither the present nor the future, nor
                    any powers, neither height nor depth, nor anything else in
                    all creation, will be able to separate us from the love of
                    God that is in Christ Jesus our Lord.
                  </Paragraph>
                </Content>
              </Slide>
            </Slides>
            <Nav to="#slide1">1</Nav>
            <Nav to="#slide2">2</Nav>
            <Nav to="#slide3">3</Nav>
            <Nav to="#slide4">4</Nav>
          </Slider>
        </Section>
      ))}
    </>
  )
}
