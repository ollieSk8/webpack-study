/**
 * Created by ollie on 2019/5/29.
 */
import Vue from 'vue';
import '../css/reset.css';
import Home from '../components/Home.vue';
new Vue({
    el: '#app',
    components: { Home },
    template: '<Home/>'
})