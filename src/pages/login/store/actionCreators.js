import Axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})
export const logout = () =>({
    type:constants.LOGOUT,
    value: false
})

export const login = ( accout, passwprd)=>{
    return(dispath)=>{
        Axios.get('./api/login.json?accout=' + accout  + "&passwprd="+ passwprd).then((res)=>{
            const result = res.data.data;
            if(result){
                dispath(changeLogin())
            }else{
                console.log('登录失败！')
            }
        }).catch(()=>{
            console.log('404')
        })
    }
}