import './bootstrap';
import { createApp } from 'vue'
import { createRouter ,createWebHistory} from 'vue-router'
import PostsIndex from './components/posts/Index.vue'
import Apps from './components/App.vue'
const app = createApp(Apps)

const routes = [
    { path: '/posts', component: PostsIndex },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})


app.use(router)
app.mount('#app')
