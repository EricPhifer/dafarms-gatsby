import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

const CopyStyles = styled.footer`
  width: 100%;
  padding: 1rem 0;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  position: absolute;
  bottom: -16rem;
  background-color: var(--gray);
  font-size: 1.75rem;
  font-weight: 600;
  color: white;
`
const List = styled.ul`
  list-style-type: none;
`

const Item = styled.li`
  padding: 0.5rem 0;
  a {
    color: var(--white);
    &:hover {
      color: var(--blue);
    }
  }
`

const Copyright = () => (
  <CopyStyles>
    <List>
      <Item>
        &copy; {new Date().getFullYear()} All Rights Reserved D & A Farms
      </Item>
      <Item>
        Designed & Developed by{' '}
        <a
          href="https://ericphifer.com/contact"
          rel="noopener noreferrer"
          target="_blank"
        >
          Phifer Web Solutions
        </a>
      </Item>
      <Item>
        <Link to="/privacypolicy">Privacy Policy</Link>
        <span> | </span>
        <Link to="/termsconditions">Terms & Conditionss</Link>
      </Item>
    </List>
  </CopyStyles>
)

export default Copyright
