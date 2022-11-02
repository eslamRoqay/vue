import './bootstrap';
import { createApp } from 'vue'
import { createRouter ,createWebHistory} from 'vue-router'
import PostsIndex from './components/posts/Index.vue'
import Apps from './components/App.vue'
import VueGoodTablePlugin from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css'

const app = createApp(Apps)

const routes = [
    { path: '/posts', component: PostsIndex },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})


app.use(VueGoodTablePlugin);
app.use(router)
app.mount('#app')
