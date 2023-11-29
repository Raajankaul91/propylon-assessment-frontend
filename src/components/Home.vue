<template>
  <header-nav v-on:loggedIn="toggleLogin($event)"></header-nav>
    <files-page></files-page>
    <form class="d-flex" role="search">
      <button type="button" class="btn btn-primary margin left-margin" @click="addingFile=!addingFile">+ Add File</button>
    </form>
    <add-file v-if="addingFile" v-on:addingFile="addingFile=false"></add-file>
</template>

<script>
import HeaderNav from '../components/Header.vue';
import Files from '../components/Files.vue';
import AddFile from '../components/AddFile.vue';

export default {
    name: 'Home',
    data(){
        return{
        loggedIn: false,
        addingFile: false
        }
    },
    components: {
        'header-nav': HeaderNav,
        'files-page': Files,
        'add-file': AddFile
    },
    
}
</script>

<style>

</style>