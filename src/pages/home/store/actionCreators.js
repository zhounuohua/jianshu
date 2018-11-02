import axios from 'axios'
import * as constants from './constants';
import{fromJS} from 'immutable';
const BASE_URL = '//mock.untilu.com/mock/31';

const changHomeData = (result) => ({
    type:constants.CHANGE_HOME_DATA,
    authorsList:result.authorsList,
    articleList:result.articleList,
    bannerlist:result.bannerlist,
    boardList:result.boardList,
    topicList:result.topicList
})

const addHomeList= (list, nexPage) =>({
    type:constants.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nexPage,

})

export const toggleTopShow = (show)=>({
    type:constants.TOGGLE_TOP_SHOW,
    show
    
})

export const getHomeInfo = ()=>{
    return (dispath) => {
        axios.get(`${BASE_URL}/api/home`).then((res)=>{
            const result = res.data.data;
            dispath(changHomeData(result));

        })
    }
}


export const getMoreList = (page) => {
    return (dispath) =>{
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const result = res.data.data;
            dispath(addHomeList(result,page + 1))
        })
    }
}