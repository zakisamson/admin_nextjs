module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/Sign_in',
          permanent: true,
        },
      ]
    },
  }