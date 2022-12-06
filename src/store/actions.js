import {getAskList, getJobsList, getNewsList} from "@/api";

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
    GET_ASK(context){
        getAskList()
            .then(response=>{
                //mutations에 값을 넘기는 행위
                context.commit('SET_ASK', response.data);
            })
            .catch(error=>{
                console.log('error', error);
            })
    },
}