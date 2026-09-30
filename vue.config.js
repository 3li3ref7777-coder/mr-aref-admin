const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/', // تم التعديل هنا ليتوافق مع Vercel
  configureWebpack: {
    performance: {
      hints: false
    }
  }
})