import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './style/index.css'
import ElementUI from 'element-ui' //引入ElementUI
import "element-ui/lib/theme-chalk/index.css" //引入ElementUI样式
Vue.config.productionTip = false;
Vue.use(ElementUI);
if (process.env.NODE_ENV === "development") {
    require("./mock/index")
}
new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");