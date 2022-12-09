import axios from "axios";

function getMember(){
    return axios.get('/api/hello')
}

export{
    getMember,
}