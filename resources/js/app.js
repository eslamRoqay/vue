import './bootstrap';
import {createApp} from "vue";
import PostIndex from './components/posts/index'
const app=createApp({})
app.component('posts-index',PostIndex)
app.mount('#app')
