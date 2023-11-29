<template>
    <div class="container-lg" height="700px">
        <!-- <img v-if="displayFile.file_type" class="square" :src="displayFile.file_data" :alt="displayFile.file_name" /> -->
        <iframe class="margin-top center-scree" title="PDF preview" :src="displayFile.file_data"></iframe>
    </div>
</template>

<script>
import * as apiFile from "../api/files.js";

export default {
    name: "DisplayFile",
    props: {
        fileVersionID: Number,
        version: Number,
        fileName: String,
        location: Array,
  },
  data(){
    return{
        displayFile:{}
    }
  },
  mounted(){
    this.getDisplayFile();
  },        
  methods:{
        getDisplayFile: function(){

            apiFile.getFile((error, response) => {
                console.log(response.file)
                if(response){
                    this.displayFile = response.file;
                }else{
                    console.log("Could not retreive files")
                }
            }, this.fileName, this.version, this.location);

        }
    }
}
</script>

<style scoped>

.center-scree{
  width: 100%;
  height: 800px;
  margin: auto;
  margin-top: 10px;
  padding: 10px;
}

</style>