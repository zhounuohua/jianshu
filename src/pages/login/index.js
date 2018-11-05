import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { LoginWrapper,
    LoginBox,
    Logo,
    LoginTitle,
    NormalTitle,
    Container,
    InputPrepend,
    RememberBtn,
    ForgetBtn,
    SignInButton,
    MoreSign

 } from './style';

class Login extends PureComponent {
    render(){
        const{ 
            loginStatus 
        } = this.props;
        if(!loginStatus){
            return(
                <LoginWrapper>
                    <Logo>
                    <a href="/">
                        <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="Logo"/>
                    </a>
                    </Logo>
                    <LoginBox>
                        <LoginTitle>
                            <NormalTitle>
                                <a className="active" href="">登录</a>   
                                <b>·</b>
                                <a className="" href="">注册</a>
                            </NormalTitle>
                        </LoginTitle>
                        <Container>
                            <InputPrepend>
                                <input placeholder="手机号或邮箱" type="text" ref={(input)=>{this.account = input}} />
                                <i className="iconfont ic-user">&#xe6da;</i>
                            </InputPrepend>
                            <InputPrepend>
                                <input className='input-password' placeholder="密码" type="password" ref={(input)=>{this.password = input}} />
                                <i className="iconfont ic-user">&#xe66a;</i>
                            </InputPrepend>
                            <RememberBtn>
                                <input type="checkbox" value="true"  />
                                <span>记住我</span>
                            </RememberBtn>
                            <ForgetBtn>
                            <a  href="">登录遇到问题?</a>
                            </ForgetBtn>
                            <SignInButton onClick={ ()=>this.props.Login(this.account,this.password) }>
                            <span></span>
                            登录
                            </SignInButton>
                            <MoreSign>
                                <h6>社交帐号登录</h6>
                                <ul>
                                    <li>
                                        <a className="weibo"  >
                                        <i className="iconfont ic-weibo">&#xe657;</i>
                                        </a>
                                    </li>
                                    <li><a className="weixin" target="_blank" ><i className="iconfont ic-wechat">&#xe61d;</i></a></li>
                                    <li><a className="qq" target="_blank" ><i className="iconfont ic-qq_connect">&#xe634;</i></a></li>
                                </ul>
                            </MoreSign>
    
                        </Container>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
          return < Redirect to="/home" />
        }
        
    }

    componentDidMount() {

    }
}
const mapState = (state)=>({
    loginStatus: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) =>({
    Login(accountElem,passwordElem) {
        dispatch(actionCreators.login(accountElem.value,passwordElem.value))
    }
})
export default connect (mapState,mapDispatch)(Login);
