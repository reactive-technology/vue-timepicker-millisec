module.exports = {
  "presets": [
    "@babel/typescript",
    "@vue/app",
  ],
  "plugins": [
    ["component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }],
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
  ]
}