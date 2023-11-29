<template>
  <div v-if="files.length>0">
    <table class="table">
        <thead>
            <tr>
            <th scope="col-2">File Name</th>
            <th scope="col-2">File Type</th>
            <th scope="col-2">Location</th>
            <th scope="col-2">CAS Location</th>
            <th scope="col-2">Version no.</th>
            <th scope="col-1">Writable</th>
            <th scope="col-1">Readable</th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="file in files" :key="file.id">
            <td>{{ file.file_name }}</td>
            <td>{{ file.file_type }}</td>
            <td>{{ file.location.join("/") }}</td>
            <td>{{ file.cas_location }}</td>
            <td>{{ file.version_number }}</td>
            <td><!-- Add Icons using String format -->
                <svg v-if="file.is_writable" class="hand" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
            </td>
            <td>
                <router-link :to="{ name: 'DisplayFile', params:{fileVersionID: file.id, location: file.location, fileName: file.file_name}, query: {version: file.version_number} }"><svg v-if="file.is_readable" class="hand left-margin" @click="DisplayFile(file)" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg></router-link>
            </td>
            </tr>
        </tbody>
    </table>
    <form class="d-flex" role="search">
        <button type="button" class="btn btn-primary left-margin" @click="searchFile=!searchFile; searchValue=''">Search File</button>
    </form>
    <div v-if="searchFile" class="input-group mb-3 search-bar left-margin">
        <input type="text" class="form-control" placeholder="sample/location/file_name.pdf?version=1 (Example)" aria-label="Username" v-model="searchValue" aria-describedby="basic-addon1">
        <span class="input-group-text hand btn btn-primary" id="basic-addon1" @click="filterFiles()">search</span>
        <span class="input-group-text hand btn btn-danger" id="basic-addon1" @click="cancelSearch(); this.searchFile = false;">Cancel</span>
    </div>




    <div class="margin-top">
        <form class="d-flex" role="search">
            <button type="button" class="btn btn-primary left-margin" @click="caSearch=!caSearch; caSearchValue=''">Content Search</button>
        </form>
    </div>
    <div v-if="caSearch" class="input-group mb-3 search-bar left-margin">
        <input type="text" class="form-control" placeholder="Content Addressed Search" aria-label="Username" v-model="caSearchValue" aria-describedby="basic-addon1">
        <span class="input-group-text hand btn btn-primary" id="basic-addon1" @click="CASSearchFilter()">search</span>
        <span class="input-group-text hand btn btn-danger" id="basic-addon1" @click="cancelSearch(); this.searchFile = false;">Cancel</span>
    </div>
  </div>
  <div class="center-screen" v-else>
    <div class="card text-center ">
        <div class="card-header">
            Files
        </div>
        <div class="card-body">
            <h5 class="card-title">No files found</h5>
            <p class="card-text">Please add files using the button below to be displayed here</p>
        </div>
        <div class="card-footer text-muted">
            :)
        </div>
    </div>
  </div>
</template>

<script>
import * as apiFile from "../api/files.js";

export default {
    name:"FileVersion",
    data(){
        return{
            files:{},
            searchFile: false,
            caSearch: false,
            searchValue: "",
            caSearchValue: "",
            filteredFile:{},
            displayFile:{
                file_type:"application"
            }
        }
    },

    mounted(){
        this.getFiles();
    }, 

    methods:{

        getFiles: function(){
            apiFile.getFiles((error, response) => {
                if(response){
                    this.files = response.files;
                    this.filteredFile = response.files;
                }else{
                    console.log("Could not retreive files")
                }
            });
        },

        filterFiles: function(){

            this.searchValue = this.searchValue.trim();
            this.files = this.filteredFile;

            var fileVersion = false;
            var searchPeices = [this.searchValue];

            if(this.searchValue.includes("?")){
                searchPeices = this.searchValue.trim().split("?");
                fileVersion = searchPeices[1].split("version=")[1];
            }
            
            const fileName = searchPeices[0].split('/').pop();
            const fileURL = searchPeices[0].split("/" + fileName)[0];
            
            this.files = this.files.filter((file) => {

                if(!fileVersion){
                    return file['location']==fileURL && fileName==file['file_name'];
                }else{
                    return fileName==file['file_name'] && parseInt(fileVersion)==file['version_number'] && file['location']==fileURL;
                }                
            });
        },

        cancelSearch: function(){
            this.searchValue = "";
            this.searchFile=false;
            this.caSearch=false;
            this.files = this.filteredFile;
            
        },

        DisplayFile: function(file){
            this.displayFile = file;
        },

        CASSearchFilter: function(){
            apiFile.searchFiles((error, response) => {
                if(response){
                    this.files = response.files;
                }else{
                    console.log("Could not retreive files")
                }
            }, this.caSearchValue);
        }
    }
}
</script>

<style scoped>
.center-screen{
  width: 500px;
  height: 300px;
  margin: auto;
  margin-top: 40px;
  padding: 10px;
}
.left-margin{
  margin-left: 50px;
}

.square{
    width:50%;
    height: 50%;
}

.model-dimention{
    width: 800px;
    height: 800px;
}

.margin-top{
    margin-top: 5px;
}

.search-bar{
    width: 600px;
    margin-top: 20px
}
</style>