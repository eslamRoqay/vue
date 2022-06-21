import {createRouter , createWebHistory} from "vue-router";
import PostIndex from '../components/posts/index'
import PostCreate from '../components/posts/create'

const routes=[
    {path: '/' , name:'posts.index', component:PostIndex  ,meta:{title:'Posts'}},
    {path: '/posts/create' , name:'posts.create', component:PostCreate,meta:{title:'Create Post'}},
]
export default createRouter({
    history:createWebHistory(),
    routes
})

