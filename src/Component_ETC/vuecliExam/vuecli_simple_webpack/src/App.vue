<template>
  <div id="app">
      {{ msg }}
      <br>
      <sample-comp :list="list"></sample-comp>
  </div>
</template>

<script>
import SampleComp from './components/SampleComp.vue'

export default {
  name: 'app',
  components: {
      SampleComp
  },
  data () {
    return {
        msg: 'This is Parent App MSG',
        list: [
            { value: 'foo' },
            { value: 'bar', children: [
                { value: 'baz' }
            ] }
        ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
