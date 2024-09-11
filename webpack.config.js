module.exports = {
    resolve: {
        fallback: {
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            url: require.resolve("url/"),
            buffer: require.resolve("buffer/"),
            net: false,
            tls: false,
            crypto: false,
            dns: false,
          },
    },
  };