import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/',
}

// 2. API 함수들을 정리
function getNewsList(){
    // 1) 일반적으로 사용
    // return axios.get(config.baseUrl+'news/1.json');

    // 2) 백틱을 이용하여 같이 사용
    return axios.get(`${config.baseUrl}news/1.json`);
}

function getJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`)
}
function getAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`)
}
function getUserDetail(userName){
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}
function getItemDetail(askItem){
    return axios.get(`${config.baseUrl}item/${askItem}.json`)
}
export {
    getNewsList,
    getJobsList,
    getAskList,
    getUserDetail,
    getItemDetail
}


