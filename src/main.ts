import { createApp } from 'vue'
import App from './App.vue'
import components from "@/components/UI";
import router from "@/router/router";
import store from "@/store";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})


app
    .use(router) // Подключаем VueRouter
    .use(store) // Подключаем глобальное хранилище VueX
    .mount('#app')
