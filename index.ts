import * as dotenv from 'dotenv';
import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import index from './components/index.vue';
import "./components/styles.css";
import login from "./components/views/Login.vue";
import test from "./components/views/Test.vue";

const routes = [
    {path: '/', component: login},
    {path: '/test', component: test}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


dotenv.config

const app = createApp(index);

app.use(router);

app.mount("#app");

