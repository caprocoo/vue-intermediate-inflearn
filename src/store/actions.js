import {getAskList, getJobsList, getNewsList, getUserDetail, getItemDetail} from "@/api";

export default {
    //getNewsList 호출
    GET_NEWS(context){
        getNewsList()
            .then(response=>{
                //mutations에 값을 넘기는 행위
                context.commit('SET_NEWS', response.data);
            })
            .catch(error=>{
                console.log('error', error);
            })
    },
    //getJobsList 호출
    GET_JOBS(context){
        getJobsList()
            .then(response=>{
                context.commit('SET_JOBS', response.data);
            })
    },
    //getAskList 호출
    GET_ASK({commit}){
        getAskList()
            .then(response=>{
                //mutations에 값을 넘기는 행위
                commit('SET_ASK', response.data);
            })
            .catch(error=>{
                console.log('error', error);
            })
    },
    GET_USER_DETAIL({commit}, param){
        getUserDetail(param)
            .then(({data})=>{
                commit('SET_USER_DETAIL', data);
            })
            .catch(error=>{
                console.log('error', error);
            })
    },
    GET_ASK_ITEM({commit}, params) {
        getItemDetail(params)
            .then(({data}) => {
                commit('SET_ASK_ITEM', data);
            })
            .catch(error => {
                console.log('error', error);
            })
    },


}