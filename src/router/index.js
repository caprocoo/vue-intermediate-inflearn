import VueRouter from 'vue-router';
import Vue from 'vue';
import {NewsView} from '../views/NewsView.vue'
import {AskView} from '../views/AskView.vue'
import {JobsView} from '../views/JobsView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes:[
        {
            path :'/news',
            components:NewsView
        },
        {
            path :'/ask',
            components:AskView
        },
        {
            path :'/jobs',
            components:JobsView
        }

    ]
})


