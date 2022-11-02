<template>

    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">content</th>
            <th scope="col">created</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(post, index) in posts">
            <th scope="row">{{ index +1 }}</th>
            <td>{{ post.title }}</td>
            <td>{{ post.content }}</td>
            <td>{{ post.created_at }}</td>
        </tr>

        </tbody>
    </table>

</template>
<script>
export default {
    data(){
        return{
            posts:[],
        }
    },
    async mounted() {
        await this.getPosts()
    },
    methods:{
        getPosts()
        {
            axios.get('api/posts')
            .then(response=>this.posts=response.data.data)
            .catch(error=>console.log(error))
        }
    }
}
</script>
