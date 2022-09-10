exports.handler = async () => {
  return {
    statusCode: 301,
    headers: {
      location: 'https://www.hiptoro.com/'
    }
  }
}

// https://wondrous-malasada-3ffc32.netlify.app/.netlify/functions/post/1001/