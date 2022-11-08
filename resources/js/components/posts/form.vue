<template>
    <div>
        <form class="row m-3">
            <div class="form-group col-6">
                <label for="exampleInputTitle">title</label>
                <input type="text" class="form-control" id="exampleInputTitle" aria-describedby="emailHelp"
                       placeholder="Enter title" v-model="form.title">
                <small class="text-danger"
                       v-if="formErrors['title']">{{ formErrors['title'][0] }}</small>
            </div>
            <div class="form-group col-6">
                <label for="exampleInputcontent1">content</label>
                <input type="text" class="form-control" id="exampleInputcontent1" placeholder="content"
                       v-model="form.content">
                <small class="text-danger"
                       v-if="formErrors['content']">{{ formErrors['content'][0] }}</small>
            </div>

            <button @click.prevent="addPost" :disabled="disable" class="btn btn-primary m-3">Submit</button>
        </form>
    </div>
</template>
<script>
import 'vue-good-table-next/dist/vue-good-table-next.css'
import {VueGoodTable} from 'vue-good-table-next';
import axios from "axios";

export default {


    data() {
        return {
            form: {
                title: '',
                content: '',
            },
            formErrors: [],
            disable: false
        }
    },

    methods: {
        addPost() {
            this.disable = true
            axios.post('/api/create/post', {
                title: this.form.title,
                content: this.form.content,
            }).then(response => {
                 this.$toast.success(response.data.message);
                this.$router.push({ path: '/posts'})
            }).catch(error => {
                this.formErrors = error.response.data.errors
                this.disable = false
             })
        }
    }
}
</script>
