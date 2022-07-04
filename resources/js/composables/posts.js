import {ref} from 'vue'
import {useRouter} from 'vue-router'

export default function usePosts() {
    const posts = ref({})
    const post = ref({})
    const isDisable = ref()
    const router = useRouter()
    const ValidationErrors = ref({})
    const getPosts = async (page = '', category = '') => {
        axios.get('/api/posts?page=' + page + '&category=' + category)
            .then(response => {
                posts.value = response.data;
            })
    }

    const getPost = async (id) => {
        axios.get('/api/posts/'+id)
            .then(response => {
                post.value = response.data.data;
            })

    }

    const storePost = async (post) => {
        if (isDisable.value) return
        isDisable.value= true
        ValidationErrors.value={}
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
            .finally(()=>isDisable.value = false)
    }

    const updatePost = async (post) => {
        if (isDisable.value) return
        isDisable.value= true
        ValidationErrors.value={}
        let serializedPost=new FormData()
            for(let item in post){
                if(post.hasOwnProperty(item)){
                    serializedPost.append(item ,post[item])
                }
            }

        axios.put('/api/posts/'+post.id, post)
            .then(response => {
                router.push({name: 'posts.index'})
            })
            .catch(error => {
                if (error.response?.data) {
                    ValidationErrors.value = error.response.data.errors
                }
            })
            .finally(()=>isDisable.value = false)
    }
    return {posts,post, getPosts, getPost , storePost,ValidationErrors ,isDisable ,updatePost}
}
