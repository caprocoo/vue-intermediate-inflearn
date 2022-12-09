import {getHello} from "@/api/member"

export default {

    GET_HELLO({commit}, params) {
        getHello(params)
            .then(({data}) => {
                commit('SET_HELLO', data);
            })
            .catch(error => {
                console.log('error', error);
            })
    },


}