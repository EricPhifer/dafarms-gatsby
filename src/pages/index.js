import * as React from 'react'
import styled from 'styled-components'
// Import Components - Hero Section
import HeroesFoot from '../components/HeroesFoot'
import StoryHero from '../components/StoryHero'
import StoryNav from '../components/StoryNav'
// Natural Beef Section
import NaturalBeef from '../components/NaturalBeef'
import StandardAccordion from '../components/StandardAccordion'
// Reviews
import ReviewCarousel from '../components/ReviewCarousel'
// Cattle Section
import Cattle from '../components/Cattle'
// Hay Section
import Hay from '../components/Hay'
// Recipes
import Recipes from '../components/Recipes'
// About
import StandardAbout from '../components/StandardAbout'
// Contact
import StandardContact from '../components/StandardContact'

const Hero = styled.div`
  display: block;
  padding-top: 10rem;
  margin-top: -10rem;
  height: calc(100vh - 7rem);
  position: relative;
  top: 7rem;
  z-index: 10;
`
const Main = styled.main`
  width: 80vw;
  margin: 0 auto;
  position: relative;
  top: 7rem;
  bottom: 3rem;
  @media only screen and (max-width: 500px) {
    width: 98vw;
  }
  @media only screen and (max-height: 600px) {
    width: 96vw;
  }
`

const H2 = styled.h2`
  display: block;
  padding-top: 10rem;
  margin-top: -10rem;
  margin: 5rem 0 1rem;
  font-size: 5rem;
  font-variant: small-caps;
  @media only screen and (max-width: 330px) {
    font-size: 4rem;
  }
`
const HR = styled.hr`
  border: 0.5rem solid var(--orange);
`

const IndexPage = () => (
  <>
    <StoryNav />
    <Hero id="top">
      <StoryHero />
      <HeroesFoot />
    </Hero>
    <Main>
      <H2 id="natural-beef">Natural Beef</H2>
      <HR />
      <NaturalBeef />
      <StandardAccordion />
      <H2 id="reviews">Happy Customers</H2>
      <HR />
      <ReviewCarousel />
      <H2 id="cattle">Cattle Available</H2>
      <HR />
      <Cattle />
      <H2 id="hay">Quality Hay</H2>
      <HR />
      <Hay />
      <H2 id="recipes">Recipes</H2>
      <HR />
      <Recipes />
      <H2 id="about">About Us</H2>
      <HR />
      <StandardAbout />
      <H2 id="contact">Contact</H2>
      <HR />
      <StandardContact />
    </Main>
  </>
)

export default IndexPage

export const Head = () => <title>D & A Farms</title>
