import './bootstrap';
import {createApp} from "vue";
import App from "./layouts/App"
import Router from "./routes/index"
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import LaravelVuePagination from 'laravel-vue-pagination';


const app=createApp(App)
app.use(VueSweetalert2);
app.component(  'Pagination', LaravelVuePagination)
app.use(Router)
app.mount('#app')
