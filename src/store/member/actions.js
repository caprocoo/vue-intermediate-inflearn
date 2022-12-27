import { getMember} from "@/api/member"

export default {

    GET_MEMBER({commit}, params) {
        return getMember(params)
            .then(({data}) => {
                commit('SET_MEMBER', data);
            })
            .catch(error => {
                console.log('error', error);
            })
    },


}
