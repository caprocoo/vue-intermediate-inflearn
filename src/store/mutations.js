export default {
    SET_NEWS(state, data){
        //state에 값을 넘겨주는 행위
        state.newsList = data;
    },
    SET_JOBS(state, data){
        state.jobsList = data;
    },
    SET_ASK(state, data){
        state.askList = data;
    }
}