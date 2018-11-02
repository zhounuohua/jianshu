import Axios from 'axios';
import { message } from 'antd';
import * as constants from './constants';
const BASE_URL = '//mock.untilu.com/mock/31';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});

export const logout = () =>({
    type:constants.LOGOUT,
    value: false
});

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
            console.log(code);
            console.log(res);
            if( code !== 0 ){
                message.info(msg);
                return;
            }else{
                dispath(changeLogin())
                console.log('登录成功！')
            }
        }).catch(()=>{
            console.log('404')
        })
    }
}