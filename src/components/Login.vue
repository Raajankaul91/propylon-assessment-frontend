<template>
  <div class="center-screen">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="loginData.username">
        <small id="emailHelp" class="form-text text-muted">We'll never share your Username with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="loginData.password">
      </div>
      <br />
      <button type="button" class="btn btn-primary" @click="login()">Login</button>
    </form>
  </div>
</template>

<script>
import * as apiAuth from "../api/login";

export default {
  name: "Login",
  data(){
    return{
      loginData: {}
    }
  },
  methods:{
    login: function () {
            if (!this.loginData.password || !this.loginData.username) {
                return;
            }

            localStorage.removeItem('access_token');
            apiAuth.login((error, response) => {
                if (error) {
                    console.log("NOT LOGGED IN");
                } else {
                    localStorage.setItem("access_token", response.data.token);
                    console.log("LOGGED IN");
                    this.$emit("loggedIn", true)
                }
            }, this.loginData);
        },
  }

}
</script>

<style scoped>

.center-screen{
  width: 500px;
  height: 500px;
  margin: auto;
  margin-top: 40px;
  padding: 10px;
}

</style>
