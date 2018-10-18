import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    bannerlist:[],
    topicList: [],
    articleList:[],
    boardList:[],
    authorsList:[],
    articlePage: 1,
    showScroll:false
});

const changeHomeData = (state, action) =>{
    return state.merge({
        'topicList':fromJS(action.topicList),
        'bannerlist':fromJS(action.bannerlist),
        'articleList':fromJS(action.articleList),
        'boardList':fromJS(action.boardList),
        'authorsList':fromJS(action.authorsList)
    })
}

const addArticleList = (state, action) =>{
    return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage':action.nexPage,
    });
}

const toggleTopShow = (state, action) => {
    return state.set('showScroll',action.show);
}

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state, action)
        case constants.TOGGLE_TOP_SHOW:
            return toggleTopShow(state, action);
        default:
            return state;   
    }
}
