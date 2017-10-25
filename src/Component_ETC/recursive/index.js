import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(App)

new Vue({
    el: "#app",
    template: "<App/>",
    components: { App },
    data: {
        list: [
            { value: 'foo' },
            { value: 'bar', children: [
                { value: 'baz' }
            ] }
        ]
    }
})