import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use((request) => {
    //config
    console.dir(request);

    //forward request
    return request;
}, (error) =>{
    //error -> at sending requests
    console.log(error);
    //forward error
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    //config
    console.dir(response);

    //forward response
    return response;
}, (error) =>{
    //error -> at response
    console.log(error);
    //forward error
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
