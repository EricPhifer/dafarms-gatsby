import { Link, graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  margin: 2rem 0;
  text-align: center;
`

const Slider = styled.div`
  max-width: 80rem;
  min-height: 40rem;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`

const Cards = styled.div`
  height: 90%;
  display: flex;
  align-items: baseline;
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

const Card = styled.li`
  padding-top: 15vh;
  margin-top: -15vh;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  flex-shrink: 0;
  border-radius: 1rem;
  background: var(--white);
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  font-size: 10rem;
  color: var(--black);
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
  height: 40rem;
  margin: 1rem;
  border-radius: 1rem;
  background-image: url(https://source.unsplash.com/random/?pie);
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
  height: 40rem;
  margin: 1rem;
  border-radius: 1rem;
  background-image: url(https://source.unsplash.com/random/?donuts);
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
  height: 40rem;
  margin: 1rem;
  border-radius: 1rem;
  background-image: url(https://source.unsplash.com/random/?dinner);
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
  height: 40rem;
  margin: 1rem;
  border-radius: 1rem;
  background-image: url(https://source.unsplash.com/random/?grilling);
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
  width: 96%;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  overflow-x: auto;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const H3 = styled.h3`
  width: 96%;
  font-size: 2rem;
  padding: 1rem 0 0.5rem;
`

const Left = styled.div`
  margin: 1rem 1rem 1rem 0;
`

const Right = styled.div`
  margin: 1rem 0 3rem;
  grid-column: 2 / span 2;
  @media only screen and (max-width: 900px) {
    grid-column: 1;
  }
`

const H4 = styled.h4`
  font-size: 2rem;
`

const List = styled.ul`
  list-style-type: none;
  margin-top: 1rem;
`

const Item = styled.li`
  font-size: 1.5rem;
  padding: 0.5rem 0;
`

const Paragraph = styled.p`
  font-size: 2rem;
  padding: 0.5rem 0;
  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`

export default function CardCarousel() {
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
        <Section id="carousels-card" key={node.id}>
          <Nav to="#card1">1</Nav>
          <Nav to="#card2">2</Nav>
          <Nav to="#card3">3</Nav>
          <Nav to="#card4">4</Nav>
          <Slider>
            <Cards className="cards">
              <Card className="card" id="card1">
                <H3>Best. Pie. Ever.</H3>
                <RandomOne />
                <Content>
                  <Left>
                    <H4>Ingredients</H4>
                    <List>
                      <Item>1c Sugar</Item>
                      <Item>1t Baking Soda</Item>
                      <Item>1/2t Salt</Item>
                      <Item>2 Eggs</Item>
                      <Item>6c Chocolate Chips</Item>
                      <Item>1T Vanilla</Item>
                    </List>
                  </Left>
                  <Right>
                    <H4>Directions:</H4>
                    <Paragraph>
                      Bring the top crust down and over the edge of the bottom
                      crust, pressing the two together to make a ridge of dough
                      all around the inside rim of the pan. Using the tines of a
                      fork, gently press the crust down onto the pan’s rim all
                      the way around the circumference of the pie. Or make a
                      taller “finger crimp”: Using the pointer finger of one
                      hand on one side of the ridge of dough, and the thumb and
                      pointer finger of the other hand on the other side, press
                      to make even indentations along the entire edge of the pie
                      crust.
                    </Paragraph>
                  </Right>
                </Content>
              </Card>
              <Card className="card" id="card2">
                <H3>Donut You Want Some?</H3>
                <RandomTwo />
                <Content>
                  <Left>
                    <H4>Ingredients</H4>
                    <List>
                      <Item>1c Sugar</Item>
                      <Item>1t Baking Soda</Item>
                      <Item>1/2t Salt</Item>
                      <Item>2 Eggs</Item>
                      <Item>6c Chocolate Chips</Item>
                      <Item>1T Vanilla</Item>
                    </List>
                  </Left>
                  <Right>
                    <H4>Directions:</H4>
                    <Paragraph>
                      Preheat the oven to 425°F. Lightly grease two standard
                      doughnut pans.
                    </Paragraph>
                    <Paragraph>
                      In a medium-sized mixing bowl, beat together the butter,
                      vegetable oil, and sugars until smooth.
                    </Paragraph>
                    <Paragraph>Add the eggs, beating to combine.</Paragraph>
                    <Paragraph>
                      Stir in the baking powder, baking soda, nutmeg, salt, and
                      vanilla.
                    </Paragraph>
                    <Paragraph>
                      Stir the flour into the butter mixture alternately with
                      the milk, beginning and ending with the flour and making
                      sure everything is thoroughly combined. The batter will be
                      fairly thick; when you draw your spatula through the
                      batter, it will leave a furrow.
                    </Paragraph>
                    <Paragraph>
                      Spoon the batter into the lightly greased doughnut pans,
                      filling the wells to about 1/4" shy of the rim.
                    </Paragraph>
                    <Paragraph>
                      Bake the doughnuts for 10 minutes. Remove them from the
                      oven, and wait 5 to 7 minutes before turning them out of
                      the pans onto a rack.
                    </Paragraph>
                    <Paragraph>
                      For cinnamon doughnuts, shake warm doughnuts in a plastic
                      bag with about 1/4 (50g) to 1/3 cup (68g) cinnamon sugar.
                      For sugar-coated doughnuts, shake doughnuts in a plastic
                      bag with about 1/2 cup (57g) non-melting topping sugar
                      (for best results), or confectioners' sugar.
                    </Paragraph>
                    <Paragraph>
                      For frosted doughnuts, see our three easy doughnut glazes.
                      Sprinkle the glazed doughnuts with toasted coconut or
                      chopped nuts, if desired.
                    </Paragraph>
                  </Right>
                </Content>
              </Card>
              <Card className="card" id="card3">
                <H3>It's What's For Dinner</H3>
                <RandomThree />
                <Content>
                  <Left>
                    <H4>Ingredients</H4>
                    <List>
                      <Item>
                        4 1/2 pounds pork tenderloins, 2 packages with 2
                        tenderloins in each package
                      </Item>
                      <Item>4 tablespoons balsamic vinegar</Item>
                      <Item>4 tablespoons extra-virgin olive oil</Item>
                      <Item>8 cloves garlic, cracked</Item>
                      <Item>
                        Steak seasoning blend or coarse salt and black pepper
                      </Item>
                      <Item>
                        4 sprigs fresh rosemary leaves stripped and finely
                        chopped
                      </Item>
                      <Item>
                        4 sprigs fresh thyme, leaves stripped and finely chopped
                      </Item>
                    </List>
                  </Left>
                  <Right>
                    <H4>Directions:</H4>
                    <Paragraph>Preheat oven to 500 degrees F. </Paragraph>
                    <Paragraph>
                      Trim silver skin or connective tissue off tenderloins with
                      a very sharp thin knife.{' '}
                    </Paragraph>
                    <Paragraph>
                      Place tender loins on a nonstick cookie sheet with a rim.
                      Coat tenderloins in a few tablespoons of balsamic vinegar,
                      rubbing vinegar into meat. Drizzle tenderloins with
                      extra-virgin olive oil, just enough to coat. Cut small
                      slits into meat and disperse chunks of cracked garlic
                      cloves into meat. Combine steak seasoning blend or coarse
                      salt and pepper with rosemary and thyme and rub meat with
                      blend. Roast in hot oven 20 minutes.
                    </Paragraph>
                    <Paragraph>
                      Let meat rest, transfer to a carving board, slice and
                      serve.
                    </Paragraph>
                  </Right>
                </Content>
              </Card>
              <Card className="card" id="card4">
                <H3>It's Summer, What to Grill?</H3>
                <RandomFour />
                <Content>
                  <Left>
                    <H4>Ingredients</H4>
                    <List>
                      <Item>1/4 cup honey</Item>
                      <Item>2 tablespoons vegetable oil</Item>
                      <Item>11 tablespoon apple cider vinegar</Item>
                      <Item>1 teaspoon ground cumin</Item>
                      <Item>1/2 teaspoon red pepper flakes</Item>
                      <Item>
                        Eight 1/2-inch bone-in pork chops (about 3 ounces each)
                      </Item>
                      <Item>Salt and freshly ground black pepper</Item>
                    </List>
                  </Left>
                  <Right>
                    <H4>Directions:</H4>
                    <Paragraph>
                      Begin by making the marinade. In a small bowl, whisk
                      together the honey, oil, vinegar, cumin and red pepper
                      flakes. Easy, right?{' '}
                    </Paragraph>
                    <Paragraph>
                      Sprinkle both sides of the pork chops with salt and pepper
                      and place in a re-sealable plastic bag with the marinade.
                      Let rest on the counter for 1 hour. That's easy.{' '}
                    </Paragraph>
                    <Paragraph>
                      Heat a grill or grill pan over medium heat. Remove the
                      pork chops from the bag and lightly sprinkle with salt and
                      pepper. Place on the grill and cook until the pork chop
                      releases from the grill, about 4 minutes. Flip and cook on
                      the other side for another 3 minutes. If using a grill
                      pan, be sure to do in batches so you don't steam the
                      chops. And don't worry if you have neither; you can do
                      this in a pan. See, easy!
                    </Paragraph>
                  </Right>
                </Content>
              </Card>
            </Cards>
          </Slider>
        </Section>
      ))}
    </>
  )
}
