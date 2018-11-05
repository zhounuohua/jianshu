import React , { PureComponent } from 'react';
import {ListItem, ListInfo, ListMeta, LoadMore} from '../style' 
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render(){
        const{ list, getMoreList,page } = this.props;
        return(
            <div>
                {
                    list.map((item,index)=>{
                        return(
                            <Link key={index} to={"./detail/" + item.get('id')}>
                                <ListItem >
                                    <img className='pic' alt='' src={item.get('imgUrl')}/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                    <ListMeta>
                                        <span  className='ListIcon ListName'>{item.get('name')}</span>
                                        <span className='ListIcon'><i className="iconfont">&#xe603;</i>22222</span>
                                        <span className='ListIcon'><i className="iconfont">&#xe609;</i>43</span>
                                        <span className='ListIcon'><i className="iconfont">&#xe602;</i>2</span>
                                    </ListMeta>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={()=>getMoreList(page)}>阅读更多</LoadMore>
            </div>
            
        )
    }
}

const mapState =(state)=>({
    list: state.getIn(['home','articleList']),
    page: state.getIn(['home','articlePage'])

})

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState,mapDispatch) (List);
