import styled from 'styled-components';

export const LoginWrapper = styled.div`
box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    text-align: center;
`;
export const Logo = styled.div`
box-sizing: border-box;

    position: absolute;
    top: 56px;
    margin-left: 50px;
    img{
        width: 100px;
    }
`;

export const LoginBox = styled.div`
box-sizing: border-box;


    width: 400px;
    margin: 100px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
`;

export const LoginTitle = styled.h4`
box-sizing: border-box;

margin: 0 auto 50px;
padding: 10px;
font-weight: 400;
color: #969696;
font-size: 18px;
`;

export const NormalTitle = styled.div`
box-sizing: border-box;
b{
    padding: 10px;
}
a{
    padding: 10px;
    color: #969696;
}
.active{
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
}
`;

export const Container = styled.div`
margin: 0 0 20px;
`;
export const InputPrepend = styled.div`
position: relative;
width: 100%;
input{
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    outline:none;
}
.input-password{
    border-top: 0;
    border-radius: 0 0 4px 4px ;
}
.ic-user{
    position: absolute;
    top: 14px;
    left: 10px;
    font-size: 18px;
    color: #969696;
}
`;
export const RememberBtn = styled.div`
    float: left;
    margin: 15px 0;

    input{
        margin:0 4px;
    }
`;
export const ForgetBtn = styled.div`
    float: right;
    position: relative;
    margin: 15px 0;
    font-size: 14px;
    a{
        color: #999;
    }
`;
export const SignInButton = styled.div`
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    span{
        position: relative;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-top: -4px;
        margin-right: 2px;
        display: none;
    }
`;

export const MoreSign = styled.div`
margin-top: 50px;
h6{
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
}
h6::after{
    right: 30px;
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: absolute;
    width: 60px;
    top: 5px;
}
h6::before {
left: 30px;
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: absolute;
    width: 60px;
    top: 5px;
}

ul{
    margin-bottom: 10px;
    list-style: none;
}
li{
    margin: 0 5px;
    display: inline-block;
}
a{
    width: 50px;
    height: 50px;
    line-height: 50px;
    display: block;
    i{
        font-size: 28px;
    }
    margin: 0 10px;
}
.ic-weibo{
    color: #e05244;
}
.ic-wechat{
    color:rgb(23, 178, 31)
}

`;
