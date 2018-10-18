import styled from 'styled-components';
import logoPic from '../../statice/nav-logo-bac.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: solid 1px #f0f0f0;
`;
export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: blick;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size:contain;
`;
export const Nav111 = styled.div`
    background:linear-gradient(to left,#efefef,#b6b6b6,#efefef);
    height:0.5px
`
export const Nav = styled.div`

    width:960px;
    height: 100%;
    margin: 0 auto;
    box-sizing: boeder-box;
    padding: 0  70px 0 0;
`;
export const NavItem = styled.div`
    padding: 0 15px;
    line-height: 56px
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        color: #969696;
        float: right;
    }
    &.active{
        color: #ea6f5a;
    }
`;
export const SearchWrapper =styled.div`
    position: relative;
    float: left;
    .iconfont{
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 30px;
        position: absolute; 
        right: 5px;
        bottom: 5px;
        font-size: 18px;
        text-align: center;
        color: #969696;
        &.focused{
            background: #888;
            color: #fff;
        }
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    box-sizing:border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee; 
    font-size: 14px;
    margin-left: 20px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused{
        width: 240px;
    }
    &.slide-enter{
        transition: all .5s ease-out;
    }
    &.slide-enter-active{
        whidth: 240px;
    }
    &.slide-exit{
        transition: all .5s ease-out;
    }
    &.slide-exit-active{
        whidth: 160px;
    }

`;
export const SearchInfo = styled.div`
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);

    padding: 20px 20px 10px;
    box-sizing: border-box;

    margin-top: 9px;
    width: 250px;
    left: 20px;
    top: 100%;
    border-radius: 4px;
    z-index: 999999;
    background: #ffffff;
`;
export const SearchInfoTitle = styled.div`
    padding-bottom: 10px;
    font-size: 14px;
    color: #969696;
`;
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    color: #969696;
    background-color: transparent;
    border-width: 0;
    padding: 0;
    cursor: pointer;
    .iconfont{
        position: absolute; 
        right: 56px;
        top: 11px;
        color: #969696;
    }
    .spin{
        display: inline-block; 
        margin-top: 3px;
        float: left;
        font-size: 14px;
        margin-right:2px;
        transition: all .2s ease-in-out; 

        transform-origin: center center;
    }
`;
export const SearchInfoItem = styled.a`
    margin-right: 10px;
    margin-bottom: 12px;
    display: inline-block;
    cursor: pointer;
    float: left;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
`;

export const SearchTrending = styled.i`
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px; 
    margin-right: 20px;
    padding: 0 20px; 
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
`;
