exports.handler = async () => {
  return {
    statusCode: 301,
    headers: {
      location: 'https://www.hiptoro.com/'
    }
  }
}