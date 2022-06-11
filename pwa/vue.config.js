const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: "./pwa",
  pwa: {
    name: "Meta Data",
    themeColor: "#4158d0", //default purple dark
    msTileColor: "#4158d0",
    start_url: ".",
    display: "fullscreen",
    background_color: "#ffffff"

  }
})
