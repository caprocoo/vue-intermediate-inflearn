import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import HelloView from '../views/member/HelloView.vue';


Vue.use(VueRouter);

export const router = new VueRouter({
    //url '#'값 제거하기
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'news'
        },
        {
            path:'/news',
            name : 'news',
            component:NewsView
        },
        {
            path:'/ask',
            name : 'ask',
            component:AskView
        },
        {
            path:'/jobs',
            name : 'jobs',
            component:JobsView
        },
        {
            path:'/item/:id',
            component:ItemView
        },
        {
            path:'/user/:id',
            component:UserView
        },
        {
            path:'/hello',
            component:HelloView
        },
    ]
})