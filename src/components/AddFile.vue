<template>
  <div class="center-screen card">
    <div class="card-header">
        Upload File
    </div>
    <form>
        <div class="form-group">
            <br />
            <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="saveFile">
        </div>
    </form>
    <div class="margin-top">
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Location</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" v-model="fileData.location" placeholder="location/goes/ (Example)">
            </div>
            <div class="form-check form-check-inline margin-top">
                <input class="form-check-input" type="checkbox" value="" v-model="isReadable" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Readable
                </label>
            </div>
                <br />
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="" v-model="isWritable" id="flexCheckChecked">
                <label class="form-check-label" for="flexCheckChecked">
                    Writable
                </label>
            </div>
            <br />
            <button type="buttom" class="btn btn-primary margin-top" @click="addFile()">Submit</button>
            <button class="btn btn-danger margin-top left-margin" @click="cancelAddingFile()">Cancel</button>
        </form>
    </div>

    <div>
        <img v-if="fileType.includes('image')" :src="preview" width="470px" />
        <iframe class="margin-top" v-if="fileType==='application/pdf'" title="PDF preview" :src="preview" width="470px" height="670px"></iframe>
    </div>
</div>

</template>

<script>
import * as apiFile from "../api/files.js";

export default {
    data(){
        return{
            fileData: {},
            preview: null,
            fileType: "",
            isReadable: false,
            isWritable: false
        }
    },
    methods:{
        saveFile: function(event){

            const file = event.target.files[0];
            this.preview = URL.createObjectURL(file);
            this.fileType = file.type;

            const reader = new FileReader();
            reader.readAsDataURL(file)

            reader.addEventListener('load', (e) => {

                this.fileData = {
                    file_name: file.name,
                    file_data: e.target.result,
                    file_type: file.type,
                }
            });
        },

        addFile: function(){

            this.fileData.is_readable = this.isReadable;
            this.fileData.is_writable = this.isWritable;            

            apiFile.addFile((error, response) => {
                if(response){
                    this.file = response.file
                }else{
                    console.log("Could not retreive files")
                }
            }, this.fileData);
        },

        cancelAddingFile: function(){
            this.$emit("addingFile", false)
        }
    }

}
</script>

<style scoped>

.center-screen{
  width: 600px;
  margin-top: 40px;
  margin-left: 50px;
  padding: 10px;
}
.margin-top{
    margin-top: 30px
}

.left-margin{
  margin-left: 5px;
}

</style>