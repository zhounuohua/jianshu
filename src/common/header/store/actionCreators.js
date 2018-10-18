import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
    type: constants.SEARC_FOUCUS
});

export const searchBlur = () => ({
    type: constants.SEARC_BLUR
});

export const mouseEnter = ()=>({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = ()=>({
    type: constants.MOUSE_LEAVE
});

export const changePage = (page)=>({
    type: constants.CHANGE_PAGE,
    page
});

export const getList = () =>{
    return(dispatch) =>{
        axios.get('./api/headerList.json').then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(()=>{
            console.log('请求错误🙅')
        })
    }
};

