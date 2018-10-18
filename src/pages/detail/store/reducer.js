import { fromJS } from 'immutable';
import *  as constants from './constants';

const defaultStatus = fromJS({
    id:'',
    title: '',
    name: '',
    nameImg: '',
    content: '' ,
    publishTime: '',
    wordage: '',
    viewsCount: '',
    commentsCount: '',
    likesCount: ''
})

export default (state = defaultStatus, action) =>{
    switch(action.type){
        case constants.CHANGE_DETAIL:
        return state.merge({
            id: action.id,
            title: action.title,
            name: action.name,
            nameImg: action.nameImg,
            content: action.content,
            publishTime: action.publishTime,
            wordage: action.wordage,
            viewsCount: action.viewsCount,
            commentsCount: action.commentsCount,
            likesCount: action.likesCount
        })
        default:
        return state;
    }
}
