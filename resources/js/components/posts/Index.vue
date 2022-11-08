<template>
    <div>
        <router-link :to="'/posts/create'" class="btn btn-info m-3"> create post </router-link>
        <vue-good-table
            :columns="columns"
            :rows="posts"

            :pagination-options="{
                  enabled: true,
            }"

            :search-options="{
                 enabled: true,
                 placeholder: 'Search this table',
        }">
        </vue-good-table>
    </div>
</template>
<script>
import 'vue-good-table-next/dist/vue-good-table-next.css'
import {VueGoodTable} from 'vue-good-table-next';

export default {

    components: {
        VueGoodTable,
    },
    data() {
        return {
            posts: [],
            columns: [

                {
                    label: 'content',
                    field: 'content',
                },
                {
                    label: 'title',
                    field: 'title',
                },
                {
                    label: 'created_at',
                    field: 'created_at',
                },
            ],
        }
    },
    async mounted() {
        await this.getPosts()
    },
    methods: {
        getPosts() {
            axios.get('api/posts')
                .then(response => this.posts = response.data.data)
                .catch(error => console.log(error))
        }
    }
}
</script>
