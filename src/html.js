import React from 'react'
import piwikConfig from './piwik.js'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

function buildPiwikSetup({ url, id }) {
  const html = `
    var paq = window._paq = window._paq || [];
    paq.push(['setTrackerUrl', '${url}/piwik/piwik.php']);
    paq.push(['setSiteId', '${id}']);
    paq.push(['enableLinkTracking']);
    paq.push(['trackPageView']);
    paq.push(['enableHeartBeatTimer']);
    window.start = new Date();
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.defer=true; g.async=true;
    g.src='${url}/piwik/piwik.js';
    s.parentNode.insertBefore(g,s);
  `;

  return <script
    type="text/javascript"
    dangerouslySetInnerHTML={{ __html: html }}
  />;
}

export default ({ htmlAttributes, headComponents, bodyAttributes, preBodyComponents, body, postBodyComponents }) => {
  let css
  if (process.env.NODE_ENV === `production`) {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    )
  }
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {headComponents}
        {css}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {(process.env.NODE_ENV === `production`) && buildPiwikSetup(piwikConfig)}
        {postBodyComponents}
      </body>
    </html>
  )
};
