let baseStyles;
if (process.env.NODE_ENV !== 'development') {
  baseStyles = require('../../static/styles/main.css');
}

const renderFullPage = (component, initialState) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <style>${baseStyles}</style>
      </head>
      <body>
        <div id="app">${component}</div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}

export default renderFullPage;
