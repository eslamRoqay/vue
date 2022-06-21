import './bootstrap';
import {createApp} from "vue";
import {createRouter , createWebHistory} from "vue-router";
import PostIndex from './components/posts/index'
import PostCreate from './components/posts/create'
import LaravelVuePagination from 'laravel-vue-pagination';

const routes=[
    {path: '/' , component:PostIndex },
    {path: '/posts/create' , component:PostCreate }
]
const router =createRouter({
    history:createWebHistory(),
    routes
})


const app=createApp({})
app.component(  'Pagination', LaravelVuePagination)
app.use(router)
app.mount('#app')
