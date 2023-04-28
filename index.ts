import * as dotenv from 'dotenv';
import { createApp } from "vue";
import index from './components/Main.vue';
import "./components/styles.css";


dotenv.config

createApp(index).mount("#app");
