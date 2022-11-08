import './bootstrap';
import { createApp } from 'vue'
import { createRouter ,createWebHistory} from 'vue-router'

import PostsIndex from './components/posts/Index.vue'
import PostsCreate from './components/posts/form.vue'
import Toaster from "@meforma/vue-toaster";

import Apps from './components/App.vue'
import VueGoodTablePlugin from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css'

const app = createApp(Apps)

const routes = [
    { path: '/posts', component: PostsIndex },
    { path: '/posts/create', component: PostsCreate },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})


app.use(VueGoodTablePlugin);
app.use(router)
app.use(Toaster,{
    position: "bottom-left",
})
app.mount('#app')
