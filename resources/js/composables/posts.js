import {ref} from 'vue'
import {useRouter} from 'vue-router'

export default function usePosts() {
    const posts = ref({})
    const router = useRouter()
    const ValidationErrors = ref({})
    const getPosts = async (page = '', category = '') => {
        axios.get('/api/posts?page=' + page + '&category=' + category)
            .then(response => {
                posts.value = response.data;
            })
    }
    const storePost = async (post) => {
        let serializedPost=new FormData()
            for(let item in post){
                if(post.hasOwnProperty(item)){
                    serializedPost.append(item ,post[item])
                }
            }


        axios.post('/api/posts', serializedPost)
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
