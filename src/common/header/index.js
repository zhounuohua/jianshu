import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {actionCreators}  from './store';
import {actionCreators as loginActionCreators }  from '../../pages/login/store';
import { HeaderWrapper,Nav111, Logo, Nav, NavItem, NavSearch, Addition,Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchTrending } from './style';
 

class Header extends Component {

    getListArea(){
        const { focused, list, page, totalPage, mouseIn, handeleMouseEnter, handeleMouseLeave,  handleChangePage } = this.props;
        const newList = list.toJS();        
        const pageList = [];

        if(newList.length){
            for(let i = (page - 1) * 10; i < page * 10 && i < newList.length; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused||mouseIn){
            return(
                <SearchInfo 
                onMouseEnter={handeleMouseEnter}
                onMouseLeave={handeleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                        onClick={()=>handleChangePage(page, totalPage,this.spinIcon)}>
                        <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe6b5;</i>
                        换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    { pageList }
                    <SearchTrending></SearchTrending>
                </SearchInfo>
            )
        }else {
            return null
        }
    }
    render(){
        const { focused, handeleInpuFocus, handeleInpuBlur, list,login, logout } = this.props;
        return (
            <HeaderWrapper>
                    <Link to='../'>
                        <Logo />
                    </Link>
                <Nav>
                <Nav111></Nav111>
                    <NavItem className='left active'><i className="iconfont">&#xe632;</i>首页</NavItem>
                    <NavItem className='left'><i className="iconfont">&#xe666;</i>下载App</NavItem>
                    {
                        login?
                        <NavItem onClick={logout} className='right'>退出</NavItem>:
                        <Link to='./login'><NavItem className='right'>登录</NavItem></Link>
                    }
                    
                    <NavItem className='right'>
                        <i className="iconfont">&#xe607;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={500}
                            classNames="slide"
                        >
                            <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={() => handeleInpuFocus(list)}
                            onBlur={handeleInpuBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60a;</i>
                        {this.getListArea()}                   
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="./write">
                        <Button className='writting'><i className="iconfont">&#xe600;</i>写文章</Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        ) 
    }
}

const mapStateToProps = (state) => {
    return {
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),
        login:state.getIn(['login','login']),
    }
}

const mapDispathToProps = (dispatch) => {
    return{
        handeleInpuFocus(list){
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
            dispatch(actionCreators.mouseEnter());

        },
        handeleInpuBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handeleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handeleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            if(originAngle) {
                originAngle = parseInt( originAngle, 10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360) +'deg)';
            if(page < totalPage) {
                dispatch(actionCreators.changePage(page+1));
            }
            else{
                dispatch(actionCreators.changePage(1));
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default  connect( mapStateToProps,mapDispathToProps )(Header);