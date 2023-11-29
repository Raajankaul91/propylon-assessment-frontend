<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <h class="navbar-brand">Propylon Test</h>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <!-- <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="">Home</a>
                </li> -->
            </ul>
            <form class="d-flex" role="search">
                <button class="btn btn-outline-success" type="submit" @click="logout()">Logout</button>
            </form>
            </div>
        </div>
        </nav>
  </div>
</template>

<script>
export default {
    methods:{
        logout: function(){
            localStorage.removeItem('access_token');
            this.$emit("loggedIn", false)
        }
    }

}
</script>

<style>

</style>