import React from 'react'
import { render } from 'react-dom'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter, BrowserRouter } from 'react-router-dom'
import Routes from './components/Routes/Routes'
import Template from './Template'


import './reset.css'
import './styles.css'

const App = ({locals}) => (
  <StaticRouter location={locals.path} context={{}}>
    <Routes />
  </StaticRouter>
)

const siteTitle = "Matt Smrke - Software Engineer"
const description = "I'm a web developer in Toronto, Canada. I work with Rails, Django, Flask and am recently getting into Angular, React and serverless architectures."

const paths = {
  '/': {
    title: siteTitle,
    description: description,
  },
  '/projects': {
    title: "My Projects | " + siteTitle,
    description: description + " This is a sample of the projects I've built or am building."
  },
  '/learning': {
    title: "Learning Resources | " + siteTitle,
    description: description + " Here's a list of courses I've enrolled in and what I though of each."
  },
  '/contact': {
    title: "Contact Me | " + siteTitle,
    description: description + " Get in touch!"
  }
}

const gaTracking = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'UA-54462999-2');
`

module.exports = locals => {
  const assets = Object.keys(locals.webpackStats.compilation.assets)
  const templateProps = {
    css: assets.filter(value => value.match(/\.css$/)),
    js: assets.filter(value => value.match(/\.js$/)),
    body: renderToString(<App locals={locals} />),
    title: paths[locals.path].title,
    description: paths[locals.path].description,
    gaTracking: gaTracking
  }
  return `<!DOCTYPE html>${renderToStaticMarkup(<Template {...templateProps} />)}`
}

if (typeof document != 'undefined') {
    render(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById('app'))
}
