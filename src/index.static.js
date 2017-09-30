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

module.exports = locals => {
    const assets = Object.keys(locals.webpackStats.compilation.assets)
    const templateProps = {
      css: assets.filter(value => value.match(/\.css$/)),
      js: assets.filter(value => value.match(/\.js$/)),
      body: renderToString(<App locals={locals} />),
    }
    return `<!DOCTYPE html>${renderToStaticMarkup(<Template {...templateProps} />)}`
}

if (typeof document != 'undefined') {
    render(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById('app'))
}
