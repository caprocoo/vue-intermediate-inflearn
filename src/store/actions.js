import {getUserDetail, getItemDetail, getList} from "@/api";

export default {
    GET_LIST({commit}, pageName) {
        getList(pageName)
            .then(({data}) => {
                commit('SET_LIST', data)
            }).catch((err) => console.log(err));
    },
    GET_USER_DETAIL({commit}, param) {
        getUserDetail(param)
            .then(({data}) => {
                commit('SET_USER_DETAIL', data);
            })
            .catch(error => {
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


};