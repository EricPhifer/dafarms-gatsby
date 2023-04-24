import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { FaAngleDown } from 'react-icons/fa'
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

const Expander = styled.div`
  width: 100%;
  min-height: 5rem;
  margin: 2rem 0;
  padding: 2rem;
  background-color: var(--black);
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  align-content: center;
  justify-items: center;
  border-radius: 0.5rem;
  svg {
    color: var(--white);
    font-size: 2rem;
    justify-self: end;
    transition: all 0.3s ease-in-out;
  }
  input:checked ~ svg {
    transform: rotate(180deg);
  }
  input:checked ~ svg {
    margin-bottom: 2rem;
  }
  input:checked ~ .content {
    height: 100%;
    padding: 2rem;
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
  color: var(--white);
  font-size: 2rem;
  text-transform: uppercase;
`

const Blank = styled.div`
  background-color: inherit;
`

const Content = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden;
  background-color: var(--white);
  border-radius: 0.5rem;
  grid-column: 1 / span 3;
  transition: all 0.3s ease-in-out;
`

const Paragraph = styled.p`
  color: inherit;
  padding: 0.5rem 0;
`

export default function StandardAccordion() {
  const { faqs } = useStaticQuery(graphql`
    query {
      faqs: allSanityFaqaccordion {
        nodes {
          id
        }
      }
    }
  `)
  const { nodes } = faqs
  return (
    <>
      {nodes.map(node => (
        <Section id="accordions" key={node.id}>
          <Expander>
            <Input type="checkbox" />
            <Blank />
            <Title>FAQ 1</Title>
            <FaAngleDown />
            <Content className="content">
              <Paragraph>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart.
              </Paragraph>
              <Paragraph>
                I am alone, and feel the charm of existence in this spot, which
                was created for the bliss of souls like mine. I am so happy, my
                dear friend, so absorbed in the exquisite sense of mere tranquil
                existence, that I neglect my talents.
              </Paragraph>
              <Paragraph>
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now.
              </Paragraph>
              <Paragraph>
                When, while the lovely valley teems with vapour around me, and
                the meridian sun strikes the upper surface of the impenetrable
                foliage of my trees, and but a few stray gleams steal into the
                inner sanctuary, I throw myself down among the tall grass by the
                trickling stream; and, as I lie close to the earth, a thousand
                unknown plants are noticed by me: when I hear the buzz of the
                little world among the stalks, and grow familiar with the
                countless indescribable forms of the insects and flies, then I
                feel the presence of the Almighty, who formed us in his own
                image, and the breath...
              </Paragraph>
            </Content>
          </Expander>
          <Expander>
            <Input type="checkbox" />
            <Blank />
            <Title>FAQ 2</Title>
            <FaAngleDown />
            <Content className="content">
              <Paragraph>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart.
              </Paragraph>
              <Paragraph>
                I am alone, and feel the charm of existence in this spot, which
                was created for the bliss of souls like mine. I am so happy, my
                dear friend, so absorbed in the exquisite sense of mere tranquil
                existence, that I neglect my talents.
              </Paragraph>
              <Paragraph>
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now.
              </Paragraph>
              <Paragraph>
                When, while the lovely valley teems with vapour around me, and
                the meridian sun strikes the upper surface of the impenetrable
                foliage of my trees, and but a few stray gleams steal into the
                inner sanctuary, I throw myself down among the tall grass by the
                trickling stream; and, as I lie close to the earth, a thousand
                unknown plants are noticed by me: when I hear the buzz of the
                little world among the stalks, and grow familiar with the
                countless indescribable forms of the insects and flies, then I
                feel the presence of the Almighty, who formed us in his own
                image, and the breath...
              </Paragraph>
            </Content>
          </Expander>
          <Expander>
            <Input type="checkbox" />
            <Blank />
            <Title>FAQ 3</Title>
            <FaAngleDown />
            <Content className="content">
              <Paragraph>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart.
              </Paragraph>
              <Paragraph>
                I am alone, and feel the charm of existence in this spot, which
                was created for the bliss of souls like mine. I am so happy, my
                dear friend, so absorbed in the exquisite sense of mere tranquil
                existence, that I neglect my talents.
              </Paragraph>
              <Paragraph>
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now.
              </Paragraph>
              <Paragraph>
                When, while the lovely valley teems with vapour around me, and
                the meridian sun strikes the upper surface of the impenetrable
                foliage of my trees, and but a few stray gleams steal into the
                inner sanctuary, I throw myself down among the tall grass by the
                trickling stream; and, as I lie close to the earth, a thousand
                unknown plants are noticed by me: when I hear the buzz of the
                little world among the stalks, and grow familiar with the
                countless indescribable forms of the insects and flies, then I
                feel the presence of the Almighty, who formed us in his own
                image, and the breath...
              </Paragraph>
            </Content>
          </Expander>
        </Section>
      ))}
    </>
  )
}
