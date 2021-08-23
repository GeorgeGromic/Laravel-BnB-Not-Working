

require('./bootstrap');


import VueRouter from "vue-router";
import router from "./routes";
//import Vue from "vue";
import Index from "./Index"
import Vue from "vue";
import moment from "moment";
import { vue } from "laravel-mix";
import StarRating from "./shared/components/StarRating"

window.Vue = require('vue').default;



/* Vue.component(
    'example-component', 
    require('./components/ExampleComponent.vue').default
);

Vue.component(
    'example-2', 
    require('./components/Example2.vue').default
); */

Vue.use (VueRouter);

Vue.filter("fromNow",value => moment(value).fromNow());

vue.component("star-rating", StarRating )

const app = new Vue({
    el: '#app',
    router,
    components:{
        
        "index":Index
    
    }

});


