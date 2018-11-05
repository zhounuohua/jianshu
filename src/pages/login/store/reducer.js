import { fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    login: false,
    token:'',
    // bannerlist:[],
    // topicList: [],
    // articleList:[],
    // boardList:[],
    // authorsList:[],
    // articlePage: 1,
    // showScroll:false
});
const loginSet = ( state, action ) => {
    return state.merge({
        'login':fromJS(action.value),
        'token':fromJS(action.token)
    })
}
export default ( state = defaultState, action ) => {
    switch (action.type){
        case constants.CHANGE_LOGIN:
            return loginSet( state, action );
        case constants.LOGOUT:
            return state.set('login',action.value);
        default:
        return state;
    }
}