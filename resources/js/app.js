/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Datepicker from 'vuejs-datepicker';

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */


/*
const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
*/

Vue.component('form-component', require('./components/FormComponent.vue').default);
Vue.component('files-table-component', require('./components/FilesTableComponent.vue').default);
Vue.component('revoked-files-table-component', require('./components/RevokedFilesTableComponent.vue').default);
Vue.component('file-component', require('./components/FileComponent.vue').default);
Vue.component('courts-component', require('./components/CourtsComponent.vue').default);
Vue.component('courts-panel-component', require('./components/CourtsPanelComponent.vue').default);
Vue.component('datepicker-component', Datepicker);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
});
