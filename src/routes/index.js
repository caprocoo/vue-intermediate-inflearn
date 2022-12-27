import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import MemberView from '../views/member/MemberView.vue';
import MainView from "@/views/MainView";
import JoinView from "@/views/member/JoinView";
import createListView from "@/views/CreateListView";
import bus from "@/utils/bus";
import {store} from '@/store/index'


Vue.use(VueRouter);

export const router = new VueRouter({
    //url '#'값 제거하기
    mode: 'history',
    routes: [

        {
            path: '/',
            redirect: '/main',
            // component: () => import('@/layout/LayoutSub.vue'),
            component: () => import('@/layout/LayoutSub.vue'),
            children: [
                {
                    path: '/main',
                    name: 'main',
                    component: MainView
                },
                {
                    path: '/news',
                    name: 'news',
                    component: createListView('NewsView'),
                    beforeEnter: (to, from, next) => {
                        bus.$emit('start:spinner');
                        store.dispatch('GET_LIST', to.name)
                            .then(() => next())
                            .catch((err) => {
                                console.log(err);
                            });
                    }
                },

                {
                    path: '/ask',
                    name: 'ask',
                    component: createListView('AskView'),
                    beforeEnter: (to, from, next) => {
                        bus.$emit('start:spinner');
                        store.dispatch('GET_LIST', to.name)
                            .then(() => next())
                            .catch((err) => {
                                console.log(err);
                            });
                    }
                },
                {
                    path: '/jobs',
                    name: 'jobs',
                    component: createListView('JobsView'),
                    beforeEnter: (to, from, next) => {
                        bus.$emit('start:spinner');
                        store.dispatch('GET_LIST', to.name)
                            .then(() => next())
                            .catch((err) => {
                                console.log(err);
                            });
                    }
                },
                {
                    path: '/item/:id',
                    component: ItemView
                },
                {
                    path: '/user/:id',
                    component: UserView
                },
                {
                    path: '/member',
                    component: MemberView
                },
                {
                    path: '/member/join',
                    component: JoinView
                },
            ],
        }
    ],

})
