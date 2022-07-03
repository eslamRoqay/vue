import {createRouter , createWebHistory} from "vue-router";
import PostIndex from '../components/posts/index'
import PostCreate from '../components/posts/create'
import PostsEdit from '../components/Posts/Edit'


const routes=[
    {path: '/' , name:'posts.index', component:PostIndex  ,meta:{title:'Posts'}},
    {path: '/posts/create' , name:'posts.create', component:PostCreate , meta:{title:'Create Post'}},
    {  path: '/posts/edit/:id', name: 'posts.edit', component: PostsEdit,  meta: { title: 'Edit post' }
    },
]
export default createRouter({
    history:createWebHistory(),
    routes
})

