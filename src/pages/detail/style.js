import styled from 'styled-components';

export const DetailWrapper = styled.div`
    overflow: hidden;
    width: 620px;
    margin: 0 auto;
    padding-bottom: 100px;

`;
export const Header = styled.div`
    margin: 50px 0 20px 0 ;
    font-size: 34px;
    word-break: break-word!important;
    word-break: break-all;
    margin: 20px 0 0;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    color:#333;
`;
export const Author = styled.div`
    margin: 30px 0 40px
    img{
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
`;
export const Avatar = styled.a`
    width: 48px;
    height: 48px;
    vertical-align: middle;
    display: inline-block;
`;
export const Info = styled.div`
    vertical-align: middle;
    display: inline-block;
    margin-left: 8px;
    .badgeIcon{
        vertical-align: middle;
        margin-right: 5px;
        width: 20px;
        height: 20px;
        border-radius: 0;
        border: 0;
    }
    .btn{
        display: inline-block;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857;
        border-radius: 4px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .btn-success{
        border-radius: 40px;
        color: #fff;
        background-color: #42c02e;
    }
    .follow{
        font-weight: 400;
        line-height: normal;
        border-color: #42c02e;
        padding: 0 7px 0 5px;
        font-size: 12px; 
    }
`;
export const Name = styled.span`
    margin-right: 3px;
    font-size: 16px;
    vertical-align: middle;
    a{
        color: #333;
    }
`;

export const Meta = styled.div`
margin-top: 5px;
font-size: 12px;
color: #969696;
span{
    padding-right: 5px;
}
`;

export const Content = styled.div`
    color: #2f2f2f;
    word-break: break-word!important;
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    img{
       width: 100%; 
       padding-bottom: 25px;
    }
    p{
        margin: 0 0 25px;
    }
`;