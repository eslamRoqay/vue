<template>
    <form @submit.prevent="storePost(post)" class="form-row">


        <div class="form-group col-3 ">
            <label for="post_title">title</label>
            <input v-model="post.title" type="text" id="post_title" class="form-control" name="title"
                   placeholder="please enter title">
            <small v-for="message in ValidationErrors?.title" class="form-text text-danger">{{ message }}</small>
        </div>


        <div class="form-group col-3">
            <label for="post_content">content</label>
            <input v-model="post.content" type="text" id="post_content" class="form-control" name="content"
                   placeholder="content">
            <small v-for="message in ValidationErrors?.content" class="form-text text-danger">{{ message }}</small>
        </div>

        <div class="form-group col-3">
            <label for="post_category">Category</label>
            <select v-model="post.category_id" id="post_category" class="form-control" name="category_id">
                <option value="" selected disabled> Select Category</option>
                <option v-for="category in categories" :value="category.id"> {{ category.name }}</option>
            </select>
            <small v-for="message in ValidationErrors?.category_id" class="form-text text-danger">{{ message }}</small>
        </div>

        <div class="form-group col-3">
            <label for="post_image">Category</label>
            <input @change="post.image = $event.target.files[0]" type="file" id="post_image" class="form-control" name="image">
            <small v-for="message in ValidationErrors?.image" class="form-text text-danger">{{ message }}</small>
        </div>

        <div class="col text-center">
            <button type="submit" :disabled='isDisabled' class="btn btn-primary text-dark justify-center ">Submit</button>
        </div>
    </form>
</template>
<script>
import {onMounted, reactive, ref} from "vue";
import useCategories from '../../composables/categories'
import usePosts from "../../composables/posts";

export default {
    setup() {
        const post = reactive({
            title: '',
            content: '',
            category_id: ''
        })
        const {categories, getCategories} = useCategories()
        const {storePost, ValidationErrors} = usePosts()

        onMounted(() => {
            getCategories()
        })
        return {categories, post, storePost, ValidationErrors}
    },


}


</script>

