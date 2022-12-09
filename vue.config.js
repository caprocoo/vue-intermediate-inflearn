const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    historyApiFallback: true,
    proxy: {
      '/api':{
        historyApiFallback: true,
        target:  "http://localhost:8088",
        ws: false,
        changeOrigin: true,
      }
    },
  }

})
