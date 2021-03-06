import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'react-fela'

import theme from './theme'
import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
          >
            {children()}
          </div>
    </div>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
