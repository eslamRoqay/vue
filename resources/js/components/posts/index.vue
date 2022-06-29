<template>
    <select v-model="selectedCategory" class="form-control mb-4" >
        <option value="" selected> Select Category </option>
        <option  v-for="category in categories" :value="category.id" > {{category.name}}</option>
    </select>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">category</th>
            <th scope="col">title</th>
            <th scope="col">content</th>
            <th scope="col">image name</th>
            <th scope="col">created at</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="post in posts.data">
            <th scope="row">{{ post.id }}</th>
            <th scope="row">{{ post.category }}</th>
            <th scope="row">{{ post.title }}</th>
            <th scope="row">{{ post.content }}</th>
            <th scope="row"> <img :src="post.image" style="height: 75px; width: 75px;"></th>
            <th scope="row">{{ post.created_at }}</th>
        </tr>
        </tbody>
    </table>
    <Pagination :data="posts" @pagination-change-page="page => getPosts(page, selectedCategory)" />
</template>
<script>
import {onMounted, ref,watch} from "vue";
import usePosts from '../../composables/posts'
import useCategories from '../../composables/categories'

export default {
    setup() {
        const selectedCategory=ref('')
        const {posts, getPosts} = usePosts()
        const {categories, getCategories} = useCategories()

        onMounted(() => {
            getPosts()
            getCategories()
        })
        watch(selectedCategory,(current,previous)=> {
            getPosts(1,current)
        })
        return {posts, getPosts, categories ,selectedCategory}
    }

    //  this is optional way in vue 2


    // data(){
    //     return{
    //         posts:[]
    //     }
    // },
    // mounted() {
    //     this.fetchPosts()
    // },
    // methods:{
    //     fetchPosts(){
    //         axios.get('api/posts')
    //         .then(response=>this.posts = response.data.data)
    //         .catch(error=>console.log(error))
    //     }
    // }
}


</script>
