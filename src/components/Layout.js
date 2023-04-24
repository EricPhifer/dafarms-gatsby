import 'normalize.css'
import React from 'react'
import styled from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Copyright from './Copyright'

const SiteStyles = styled.div`
  width: 100vw;
  min-height: 100vh;
  .storybrand {
    bottom: -10rem;
  }
`

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteStyles>
        {children}
        <Copyright />
      </SiteStyles>
    </>
  )
}
