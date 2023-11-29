<template>
  <div v-if="!loggedIn">
    <login-page v-on:loggedIn="toggleLogin($event)"></login-page>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    'login-page': Login,
  },
  data(){
    return{
      loggedIn: false,
      addingFile: false
    }
  },

  mounted(){
    this.checkLogin();
  },

  methods:{
    toggleLogin: function(access){
      this.loggedIn = access;
    },

    checkLogin: function(){
      const token = localStorage.getItem('access_token');
      if(token){
        console.log("STAYING LOGGED IN")
        this.loggedIn = true;
      }else{
        console.log("LOGGED OUT")
        this.loggedIn = false;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.margin{
  margin-left: 20px;
  margin-top: 20px;
}

.left-margin{
  margin-left: 50px;
}

.hand{
  cursor: pointer;
}
</style>
