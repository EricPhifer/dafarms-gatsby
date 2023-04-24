import { graphql, useStaticQuery } from 'gatsby'
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

const H2 = styled.h2`
  margin: 1rem 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  @media only screen and (max-width: 1080px) {
    display: flex;
    flex-flow: column-reverse nowrap;
  }
`

const Right = styled.div`
  margin: 0;
`

const Left = styled.div`
  margin: 0;
  padding: 0 2rem;
  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const Paragraph = styled.p`
  padding: 0.5rem 0;
`

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://source.unsplash.com/376KN_ISplE);
  background-size: cover;
  background-position: center center;
  position: relative;
  figcaption {
    color: var(--black);
    position: absolute;
    bottom: 0;
    right: 0;
    text-shadow: 0.1rem 0 0 var(--white), 0.1rem 0 var(--white),
      -0.1rem 0 0 var(--white), 0 -0.1rem 0 var(--white);
  }
  @media only screen and (max-width: 1080px) {
    height: 35rem;
  }
`
export default function StandardAbout() {
  const { about } = useStaticQuery(graphql`
    query {
      about: allSanityAbout {
        nodes {
          id
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
              <H2>We're Just Everyday, Down-to-Earth People</H2>
              <Paragraph>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin.
              </Paragraph>
              <Paragraph>
                He lay on his armour-like back, and if he lifted his head a
                little he could see his brown belly, slightly domed and divided
                by arches into stiff sections. The bedding was hardly able to
                cover it and seemed ready to slide off any moment.
              </Paragraph>
              <Paragraph>
                His many legs, pitifully thin compared with the size of the rest
                of him, waved about helplessly as he looked. "What's happened to
                me? " he thought. It wasn't a dream.
              </Paragraph>
              <Paragraph>
                His room, a proper human room although a little too small, lay
                peacefully between its four familiar walls.
              </Paragraph>
              <Paragraph>
                A collection of textile samples lay spread out on the table -
                Samsa was a travelling salesman - and above it there hung a
                picture that he had recently cut out of an illustrated magazine
                and housed in a nice, gilded frame. It showed a lady fitted out
                with a fur hat and fur boa who sat upright, raising a heavy fur
                muff that covered the whole of her lower arm towards the viewer.
                Gregor then turned to look out the window at the dull weather.
              </Paragraph>
            </Left>
            <Right>
              <Image>
                <figcaption>Source: Unsplash.com | krakenimages</figcaption>
              </Image>
            </Right>
          </Grid>
        </Section>
      ))}
    </>
  )
}
