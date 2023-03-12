import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import "./assets/main.scss";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

const app = createApp(App);

app.use(router);

app.mount("#app");
