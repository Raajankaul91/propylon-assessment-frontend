import config from '../config'
import axios from 'axios';

export default {
    /*
	    Sets the base url for talking to api
	*/
	getBaseUrl(){
		return config['api_address'];
	},

    // the bearer token is retrieved from local storage and returned in correct format for api calls
    getAuthHeader() {
    
        if (localStorage && localStorage.getItem('access_token')) {
            return 'token ' + localStorage.getItem('access_token');
        }
    
        return null;
    },

    /*
        Executes a GET Request on the API
	*/
	get(url, callback) {

        let token = this.getAuthHeader();
            let header = {};
    
            if (token) {
                header = { "Authorization": token };
            }
    
            const options = {
                method: 'GET',
                headers: header,
                url: this.getBaseUrl() + url,
              };
    
            axios(options).then(function (response) {
                callback(null, response);
              })
              .catch(function (error) {
                callback(error.response, null);
              });
        },

    /*
        Executes a POST request on the API
    */
	post(url, data, callback){

        let token = this.getAuthHeader();
            let header = {};
    
            if (token) { 
                header = { "Authorization": token };
            }
        
            const options = {
                method: 'POST',
                headers: header,
                // dataType: 'json',
                // contentType: 'application/json',
                data: data,
                url: this.getBaseUrl() + url,
              };
    
            axios(options).then(function (response) {
              callback(null, response);
            })
            .catch(function (error) {
              callback(error.response, null);
            });
        },
    
}