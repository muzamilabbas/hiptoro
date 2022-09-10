
exports.handler = async event => {
  if (event.headers.referer.includes('facebook')) {
    return {
      statusCode: 301,
      headers: {
        location: decodeURIComponent(event.queryStringParameters.url.replace(/\+/g, '%20'))
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