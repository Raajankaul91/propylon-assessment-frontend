import api from './index.js';

export function login(callback, data) {

    api.post('auth-token/', data, (isError, response) =>{
        if (!isError) {
            callback(null, response);
        } else {
            callback(isError.data, null);
        }
    })
}