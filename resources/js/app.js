import './bootstrap';
import {createApp} from "vue";
import PostIndex from './components/posts/index'
import LaravelVuePagination from 'laravel-vue-pagination';

const app=createApp({})
app.component('posts-index',PostIndex)
app.component(  'Pagination', LaravelVuePagination)
app.mount('#app')
