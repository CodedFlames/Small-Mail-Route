import login from "./components/views/Login.vue";
import home from "./components/views/Home.vue";
import index from './components/index.vue';
import "./components/styles.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import * as dotenv from 'dotenv';

dotenv.config
const app = createApp(index);


const routes = [
    {path: '/', component: login},
    {path: '/Home', component: home}
]



const router = createRouter({
    history: createWebHistory(),
    routes
})



app.use(router);
app.mount("#app");


export { router };

