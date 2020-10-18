<template>
  <div id="app">
      <h3>
          native input
      </h3>
      <div><input type="text" class="pl-input"></div>
      <h3>
          <el-button>element ui</el-button>
      </h3>
      <h3>
          har-ui
      </h3>
      <div>
          <har-button/>
          <har-input/>
      </div>
      <div>
        <Button95>按钮1</Button95>
        <Window95>
          <WindowContent95>
            <Cutout95 class="mycutout" :shadow="true">156156561</Cutout95>
          </WindowContent95>
        </Window95>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
