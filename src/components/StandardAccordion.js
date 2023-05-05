import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
// Plugins
import SanityImage from 'gatsby-plugin-sanity-image'
import styled from 'styled-components'
// React Icons
import { FaAngleDown, FaOpencart } from 'react-icons/fa'
import { GiCookingPot, GiSaucepan } from 'react-icons/gi'
import { GrBottomCorner } from 'react-icons/gr'
import { MdOutlineOutdoorGrill } from 'react-icons/md'
import { TbGrillOff, TbTransitionBottom, TbXboxB } from 'react-icons/tb'

const Section = styled.section`
  max-width: 108rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  p:last-child {
    padding-bottom: 1.5rem;
  }
`

const Expander = styled.div`
  width: 100%;
  min-height: 5rem;
  margin: 2rem 0;
  padding: 7rem 2rem 2rem;
  background-color: var(--black);
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  align-content: center;
  justify-items: center;
  border-radius: 0.5rem;
  z-index: 100;
  svg {
    position: absolute;
    top: 2rem;
    right: 1rem;
    color: var(--white);
    font-size: 4rem;
    transition: all 0.3s ease-in-out;
  }
  input:checked ~ svg {
    transform: rotate(180deg);
  }
  input:checked ~ svg {
    margin-bottom: 2rem;
  }
  input:checked ~ .content {
    width: 100%;
    height: 100%;
    gap: 1rem;
    padding: 2rem;
    .card {
      width: auto;
      min-width: 25rem;
      height: auto;
    }
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  z-index: 200;
`

const Title = styled.h3`
  position: absolute;
  top: 3rem;
  color: var(--white);
  font-size: 3.25rem;
  text-transform: uppercase;
`

const Blank = styled.div`
  background-color: inherit;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  background-color: var(--white);
  transition: all 0.3s ease-in-out;
  z-index: 300;
  img {
    max-height: 18.1rem;
    padding: 1rem;
  }
  figcaption {
    width: 100%;
    padding: 0.2rem 0.5rem;
    text-align: right;
  }
  @media only screen and (max-width: 1070px) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  width: 33.33rem;
  height: 0;
  overflow: hidden;
  background-color: var(--white);
  box-shadow: 0.1rem 0.1rem 1rem var(--gray);
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  z-index: 400;
`

const TinyGrid = styled.div`
  min-height: 8rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
`

const Left = styled.div`
  display: flex;
  flex-flow: column wrap;
  position: relative;
  left: 0.5rem;
  grid-column: 1 / span 1;
  z-index: 500;
  .lean {
    color: var(--green);
  }
  .marinate {
    color: var(--orange);
  }
`

const Right = styled.div`
  display: flex;
  flex-flow: column wrap;
  position: relative;
  left: 0.5rem;
  grid-column: 2 / span 3;
  z-index: 500;
  .top,
  .bottom {
    width: 100;
    position: relative;
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .icon {
    position: relative;
    svg {
      position: static;
      font-size: 2.5rem;
      color: var(--black);
    }
  }
`

const H4 = styled.h4`
  font-size: 2rem;
  position: relative;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 500;
`

export default function StandardAccordion() {
  const { cuts } = useStaticQuery(graphql`
    query {
      cuts: allSanityAccordion {
        nodes {
          id
          category
          cut {
            id
            title
            lean
            marinate
            stirfry
            skillet
            roast
            panbroil
            grill
            indirectgrill
            broil
            braise
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
    }
  `)
  const { nodes } = cuts
  return (
    <Section id="accordions">
      {nodes.map(node => (
        <Expander key={node.id}>
          <Input type="checkbox" />
          <Blank className="blank" />
          <Title>{node.category}</Title>
          <FaAngleDown />
          <Grid className="content">
            {node.cut.map(n => (
              <Card className="card" key={n.id}>
                <H4>{n.title}</H4>
                {n.image ? (
                  <SanityImage
                    {...n.image}
                    alt={n.alt}
                    style={{
                      objectFit: 'cover',
                      auto: 'format',
                    }}
                  />
                ) : (
                  <div />
                )}
                <figcaption>{n.source ? `Source: ${n.source}` : ''}</figcaption>
                <TinyGrid>
                  <Left>
                    <p className="lean">{n.lean ? 'Lean' : <Blank />}</p>
                    <p className="marinate">
                      {n.marinate ? 'Marinate' : <Blank />}
                    </p>
                  </Left>
                  <Right>
                    <div className="top">
                      <div className="icon">
                        {n.stirfry ? (
                          <GrBottomCorner title="Stir-Fry" />
                        ) : (
                          <div />
                        )}
                      </div>
                      <div className="icon">
                        {n.skillet ? (
                          <TbTransitionBottom title="Skillet to Oven" />
                        ) : (
                          <div />
                        )}
                      </div>
                      <div className="icon">
                        {n.roast ? <FaOpencart title="Roast" /> : <div />}
                      </div>
                      <div className="icon">
                        {n.broil ? <TbXboxB title="Broil" /> : <div />}
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="icon">
                        {n.panbroil ? (
                          <GiSaucepan title="Pan-Broil Skillet" />
                        ) : (
                          <div />
                        )}
                      </div>
                      <div className="icon">
                        {n.grill ? (
                          <MdOutlineOutdoorGrill title="Grill" />
                        ) : (
                          <div />
                        )}
                      </div>
                      <div className="icon">
                        {n.indirectgrill ? (
                          <TbGrillOff title="Indirect Grilling" />
                        ) : (
                          <div />
                        )}
                      </div>
                      <div className="icon">
                        {n.braise ? (
                          <GiCookingPot title="Braise / Pot Roast" />
                        ) : (
                          <div />
                        )}
                      </div>
                    </div>
                  </Right>
                </TinyGrid>
              </Card>
            ))}
          </Grid>
        </Expander>
      ))}
    </Section>
  )
}
