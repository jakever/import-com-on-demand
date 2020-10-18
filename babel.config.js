module.exports = {
  // presets: [
  //   '@vue/cli-plugin-babel/preset'
  // ],
  presets: ["@vue/app", ["@babel/preset-env", { "modules": false }]],
  plugins: [
    [
      // "component",
      "import",
      {
        libraryName: "har-awesome-ui",
        libraryDirectory: "lib",
        styleLibraryDirectory: "lib",
        // style: (name) => {
        //     console.log('style-->>', name)
        //     return `css/${name}.css`
        // },
        // style: true,
        // customName: (name) => {
        //     console.log('customName-->>', name)
        //     return `har-awesome-ui/lib/${name}/index.js`
        // },
        // customStyleName: (name) => {
        //     console.log('style-->>', name)
        //     return `har-awesome-ui/lib/css/${name}.css`
        // }
      }
    ]
  ]
  // plugins: [
  //   [
  //     "import",
  //     {
  //       libraryName: "har-power-ui",
  //       libraryDirectory: "components",
  //       camel2DashComponentName: false
  //     }
  //   ]
  // ]
}
