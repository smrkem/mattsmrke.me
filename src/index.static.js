import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'


import 'normalize.css'
import './base.css'

import Template from './Template'
import App from './components/App/App'

module.exports = locals => {
    const assets = Object.keys(locals.webpackStats.compilation.assets)
    const templateProps = {
      css: assets.filter(value => value.match(/\.css$/)),
      js: assets.filter(value => value.match(/\.js$/)),
      body: renderToString(<App locals={locals} />),
    }
    return `<!DOCTYPE html>${renderToStaticMarkup(<Template {...templateProps} />)}`
}


import { render } from 'react-dom'

if (typeof document != 'undefined') {
    render(<App />, document.getElementById('app'))
}
