import Axios from 'axios';
import { message } from 'antd';
import * as constants from './constants';
const BASE_URL = '//mock.untilu.com/mock/31';

const changeLogin = (token) => ({
    type: constants.CHANGE_LOGIN,
    value: true,
    token
});

export const logout = () =>({
    type:constants.LOGOUT,
    value: false
});

// const changHomeData = (result) => ({
//     type:constants.CHANGE_HOME_DATA,
//     authorsList:result.authorsList,
//     articleList:result.articleList,
//     bannerlist:result.bannerlist,
//     boardList:result.boardList,
//     topicList:result.topicList
// });

const getHomeData = (token)=>{
    const storage=window.localStorage;
    storage.setItem('token',token);
    // localStorage.removeItem("token")
    // localStorage.getItem('token')
    // return (dispath) => {
    //     console.log(1231231)
    //     Axios.get(`${BASE_URL}/api/home`).then((res)=>{
    //         const result = res.data.data;
    //         dispath(changHomeData(result));
    //     })
    // }
}

export const login = ( name, passwprd)=>{
    return(dispath)=>{
        Axios.get(`${BASE_URL}/api/login`,{
            params: {
                name,
                passwprd
              }
        }).then((res)=>{
            const code = res.data.code;
            const msg = res.data.msg;
            const token = res.data.data.token;
            console.log(code);
            console.log(res);
            console.log(token);
            if( code !== 0 ){
                message.error(msg);
                return;
            }else{
                getHomeData(token);
                dispath(changeLogin(token));
            }
        }).catch(()=>{
            console.log('404')
        })
    }
}