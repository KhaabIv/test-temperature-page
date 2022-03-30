
import TemperatureList from "@/pages/TemperatureList.vue";
import TemperatureRecording from "@/pages/TemperatureRecording.vue"
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/',
        component: TemperatureList
    },
    {
        path: '/temperatureRecording',
        component: TemperatureRecording
    },
]

const  router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default  router;