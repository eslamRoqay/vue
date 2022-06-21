import './bootstrap';
import {createApp} from "vue";
import App from "./layouts/App"
import Router from "./routes/index"

import LaravelVuePagination from 'laravel-vue-pagination';


const app=createApp(App)
app.component(  'Pagination', LaravelVuePagination)
app.use(Router)
app.mount('#app')
