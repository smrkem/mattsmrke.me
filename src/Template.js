import React from 'react'

const Template = (props) => {
  return (
    <html>
      <head>
        <title>Static Yo!</title>
        {props.css.map(file => <link href={`/${file}`} rel="stylesheet" />)}
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.js.map(file => <script src={`/${file}`} async></script>)}
      </body>
    </html>
  )
}

export default Template