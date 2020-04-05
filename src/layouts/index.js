import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'
import img from '../pages/4.jpg'

const openGraph = [
  {
    property: 'og:title',
    content: 'The Girl In the Blue Bra Film',
  },
  {
    property: 'og:description',
    content: 'Independent film project inspired by the Girl in the Blue Bra events.',
  },
  {
    property: 'og:image',
    content: img,
  },
]
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Girl in the Blue Bra"
      meta={[
        { name: 'description', content: 'The Girl In the Blue Bra Film' },
        { name: 'keywords', content: 'Egypt, Revolution, Girl, Blue Bra, Me Too, Film, Independent Film' },
        ...openGraph,
      ]}
      link={[
        {rel: 'stylesheet', href:'https://use.fontawesome.com/releases/v5.0.9/css/all.css', integrity:'sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1', crossOrigin:'anonymous'},
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
