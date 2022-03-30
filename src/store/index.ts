import {createStore} from "vuex";
import {measurements} from "@/store/measurements";

export default createStore({
    modules: {
        measurements
    }
})