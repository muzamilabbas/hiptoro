exports.handler = async event => {
  if (event.headers.referer && event.headers.referer.includes('facebook')) {
    return {
      statusCode: 301,
      headers: {
        location: `https://www.hiptoro.com/?page_id=${event.queryStringParameters.pid}` 
      }
    }
  } else {
    return {
      statusCode: 301,
      headers: {
        location: `https://wondrous-malasada-3ffc32.netlify.app/post/${event.queryStringParameters.pid}.html`
      }
    }
  }
}

// https://wondrous-malasada-3ffc32.netlify.app/.netlify/functions/post/1001/
// https://wondrous-malasada-3ffc32.netlify.app/.netlify/functions/redirects?pid=20955
