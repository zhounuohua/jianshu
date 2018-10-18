import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import Banner from './components/Banner';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';

import { 
    HomeWrapper, 
    HomeList,
    HomeRight ,
    BackTop
} from './style'

class Home extends PureComponent {


    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){
        return(
               <HomeWrapper>
                   <HomeList>
                        <Banner/>
                        <Topic/>
                        <List/>
                        
                   </HomeList>
                   <HomeRight>
                        <Recommend/>
                        <Writer/>
                   </HomeRight>
                   {
                       this.props.showScroll ? <BackTop onClick={this.handleScrollTop}><i className="iconfont">&#xe815;</i></BackTop>:null
                   }
               </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
}

const mapState = (state) =>({
    showScroll: state.getIn(['home','showScroll'])
})


const mapDispatch =(dispatch) =>({
    changeHomeData(){
        const action = actionCreators.getHomeInfo()
        dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 200){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})


export default connect(mapState,mapDispatch)(Home);