
exports.handler = async event => {
  if (event.headers.referer && event.headers.referer.includes('facebook')) {
    return {
      statusCode: 301,
      headers: {
        location: `https://www.hiptoro.com/?page_id=${event.headers.referer.pid}` 
      }
    }
  } else {
    let pathName = location.pathname.split('/')[2].split('-')
    return {
      statusCode: 301,
      headers: {
        location: process.env.URL + pathName[0] + '/' + pathName[1]
      }
    }
  }
}

// https://wondrous-malasada-3ffc32.netlify.app/.netlify/functions/post/1001/
// https://wondrous-malasada-3ffc32.netlify.app/.netlify/functions/redirects?pid=20955