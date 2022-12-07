import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import mutations from './mutations.js'
import actions from './actions.js'

export const store = new Vuex.Store({
    //store에 있는 실질적인 값들
    state:{
        newsList:[],
        askList:[],
        jobsList:[],
        userDatail:{},
        askItem:{},
    },
    //script에서 사용하는 computed와 같은 역할을 한다.
    getters:{
        asks(state){
            return state.askList;
        },
        jobs(state){
            return state.jobsList;
        }
    },
    //actions에서 값을 받아 state로 넘겨준다.
    mutations:mutations,
    //비동기와 같은 api를 호출하여 mutations으로 넘겨준다.
    actions:actions
})