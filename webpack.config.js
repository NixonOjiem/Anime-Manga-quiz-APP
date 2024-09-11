module.exports = {
    resolve: {
      fallback: {
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        net: false,
        tls: false,
        crypto: false,
        dns: false,
      },
    },
  };