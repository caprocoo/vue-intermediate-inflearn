import axios from "axios";

function getHello(){
    return axios.get('/api/hello')
}

export{
    getHello,
}