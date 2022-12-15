import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import MemberView from '../views/member/MemberView.vue';
import MainView from "@/views/MainView";
import JoinView from "@/views/member/JoinView";
import createListView from "@/views/CreateListView";


Vue.use(VueRouter);

export const router = new VueRouter({
    //url '#'값 제거하기
    mode:'history',
    routes:[

        {
            path: '/',
            redirect:'/main',
            // component: () => import('@/layout/LayoutSub.vue'),
            component: () => import('@/layout/LayoutSub.vue'),
            children:[
                {
                    path:'/main',
                    name : 'main',
                    component:MainView
                },
                {
                    path:'/news',
                    name : 'news',
                    component:createListView('NewsView'),
                },

                {
                    path:'/ask',
                    name : 'ask',
                    component:createListView('AskView'),
                },
                {
                    path:'/jobs',
                    name : 'jobs',
                    component:createListView('JobsView'),
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
                    path:'/member',
                    component:MemberView
                },
                {
                    path:'/member/join',
                    component:JoinView
                },
            ],
        }
    ],

})