require('./bootstrap.js');
import { createApp } from 'vue'
import PostsIndex from './components/Posts/Index.vue'
import App from './App.vue'
const app = createApp({})
app.component('app', App)


const routes = [
    { path: '/posts', component: PostsIndex },
]
const router = VueRouter.createRouter({
     history: VueRouter.createWebHashHistory(),
    routes,
})
app.use(router)


app.mount('#app')
