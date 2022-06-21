<template>
    <div class="min-h-screen bg-gray-100">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center">
                        <a :to="{name:'posts.index'}">
                            <x-application-logo class="block h-10 w-auto fill-current text-gray-600"/>
                        </a>
                    </div>

                    <!-- Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <router-link :to="{name:'posts.index'}" active-class="border-b-2 border-indigo-400"> posts
                        </router-link>
                        <router-link :to="{name:'posts.create'}" active-class="border-b-2 border-indigo-400">Create
                            Posts
                        </router-link>

                    </div>
                </div>


            </div>
        </div>
        <!-- Responsive Navigation Menu -->

        <!-- Page Heading -->
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1>{{PageTitle}}</h1>
            </div>
        </header>

        <!-- Page Content -->
        <main>
            <div class="py-12">
                <div class="w-full sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-6 bg-white border-gray-200">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

</template>
<script>
export default {
    computed:{
        PageTitle (){
             return this.$route.meta.title
        }
    }
}
</script>
