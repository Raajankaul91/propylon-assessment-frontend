import api from './index.js';

export function getFiles(callback) {

    api.get('api/file_versions/', (isError, response) =>{
        if (!isError) {
            callback(null, response.data);
        } else {
            callback(isError.data, null);
        }
    })
}

export function addFile(callback, data) {
    
    api.post('api/file_versions/', data, (isError, response) =>{
        if (!isError) {
            callback(null, response);
        } else {
            callback(isError.data, null);
        }
    })
}

export function getFile(callback, fileName, fileVersion, location) {

    api.get('api/file_versions/' + fileVersion + "?location=" + location + "&file_name=" + fileName, (isError, response) =>{
        if (!isError) {
            callback(null, response.data);
        } else {
            callback(isError.data, null);
        }
    })
}

export function searchFiles(callback, searchValue) {

    api.get('api/file_versions/search/?search_value=' + searchValue, (isError, response) =>{
        if (!isError) {
            callback(null, response.data);
        } else {
            callback(isError.data, null);
        }
    })
}

