const renderFullPage = (component, styles, initialState) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        ${styles}
      </head>
      <body>
        <div id="app">${component}</div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}

export default renderFullPage;
