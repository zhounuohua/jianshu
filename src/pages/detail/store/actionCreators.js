import axios from "axios";
import * as constants from './constants'

const changeDetail= (
    id,
    title,
    name,
    nameImg,
    content ,
    publishTime,
    wordage,
    viewsCount,
    commentsCount,
    likesCount) =>({
    type:constants.CHANGE_DETAIL,
    id,
    title,
    name,
    nameImg,
    content ,
    publishTime,
    wordage,
    viewsCount,
    commentsCount,
    likesCount

})


export const getDetail = (id)=>{
    return (dispatch) =>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const result = res.data.data[0];
            dispatch(changeDetail(
                result.id,
                result.title,
                result.name,
                result.nameImg,
                result.content ,
                result.publishTime,
                result.wordage,
                result.viewsCount,
                result.commentsCount,
                result.likesCount
            ))
        })
    }
}