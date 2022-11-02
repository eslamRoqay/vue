<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/posts">posts</router-link>
                     </li>

                    <li class="nav-item">
                        <router-link class="nav-link active" to="/home">home</router-link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    <router-view></router-view>
</template>
<script>

</script>
