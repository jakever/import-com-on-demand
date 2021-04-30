module.exports = {
  // presets: [
  //   '@vue/cli-plugin-babel/preset'
  // ],
  presets: ["@vue/app", ["@babel/preset-env", { "modules": false }]],
  plugins: [
    [
      "component",
      // "import",
      {
        libraryName: "dm-ui",
        libraryDirectory: "lib",
        // "styleLibraryName": "theme-chalk",
        // styleLibraryDirectory: "lib",
        // style: (name) => {
        //     return `har-awesome-ui/lib/${name}.css`
        // },
        // style: 'css',
        // customName: (name) => {
        //     console.log('customName-->>', name)
        //     return `har-awesome-ui/lib/${name}`
        // },
        // customStyleName: (name) => {
        //     console.log('style-->>', name)
        //     return `har-awesome-ui/lib/${name}/index.css`
        // }
      }
    ]
  ]
}
