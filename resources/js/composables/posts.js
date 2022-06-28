import {ref} from 'vue'
import {useRouter} from 'vue-router'

export default function usePosts() {
    const posts = ref({})
    const router = useRouter()
    const ValidationErrors = ref({})
    const getPosts = async (page = 2, category = '') => {
        axios.get('/api/posts?page=' + page + '&category=' + category)
            .then(response => {
                posts.value = response.data;
            })
    }
    const storePost = async (post) => {
        axios.post('/api/posts', post)

            .then(response => {
                router.push({name: 'posts.index'})
            })
            .catch(error => {
                if (error.response?.data) {
                    ValidationErrors.value = error.response.data.errors
                }
            })
    }
    return {posts, getPosts, storePost,ValidationErrors}
}
