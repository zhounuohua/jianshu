import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeList = styled.div`
    float: left;    
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner{
        width: 625px;
        height: 270px;
        border-radius: 6px;
    }
    .ant-carousel .slick-slide {
        text-align: center;
        height: 270px;
        line-height: 270px;
        background: #364d79;
        overflow: hidden;
    }
      
    .ant-carousel .slick-slide h3 {
        color: #fff;
    }
`;

export const HomeRight = styled.div`
    width: 280px; 
    float: right;
    padding: 30px 0;
`;


export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    border-bottom: 1px solid #dcdcdc;

`

export const TopicItem = styled.div`
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    color: #333;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
    .topicItem-img{
        width: 32px;
        height: 32px;
    }
    .name{
        display: inline-block;
        padding: 0 11px 0 6px;
        font-size: 14px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 4px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
      line-height: 27px;
      font-size: 18px;
      font-weight: bold; 
      color: #333; 
    }
    .desc{
        line-height: 24px;
        color: #999;
    }
`;

export const ListMeta = styled.div`
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    .ListName{
        color: #b4b4b4;
    }
    .ListIcon{
        color: #b4b4b4;
        margin-right: 10px;
    }
    .iconfont{
        font-size: 12px;
        margin-right: 2px;
    }
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
    display: block;
    cursor: pointer;
`;


export const  BorderItem = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
    width: 100%;
` 
export const BorderList = styled.div`
    width: 100%;
    .BorderListImg{ 
        width: 100%;
        height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`

export const BorderDownloadApp= styled.a.attrs({
    href: 'https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click'
})` width:100%;
    display: inline-block;
    border: 1px solid #f0f0f0;
    margin-bottom: 32px;
    padding: 10px 22px;
    border-radius: 6px;
    background-color: #fff;
    .BorderListCard{
        width: 60px;
        height: 60px;
        opacity: .85;
    }
    .BorderDownloadRight{
        display: inline-block;
        font-size: 15px;
        color: #333;
        vertical-align: middle;
        margin-left: 7px;
    }
    .BorderDownloadT{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
    .iconfont{
        font-size: 12px;
        padding-left: 6px ;
    }
` ;


export const Recommend =styled.div`
    font-size: 14px;
    color: #969696;
    line-height: 20px;
`;

export const RecommendTop =styled.div`
    overflow: overlay;
`;

export const AuthorsRenewal = styled.div`
    display: inline-block;
    float: right;
    .iconfont{
        margin-right: 6px;
    }
    .spin{
    display: inline-block;     
        transition: all .2s ease-in-out; 

        transform-origin: center center;
    }

`;

export const RecommendItem = styled.ul`
    margin: 0 0 20px;
    text-align: left;
    list-style: none;
`;

export const RecommendList = styled.li`
    margin-top: 15px;
    .AuthorImg{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        img{
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    .AuthorIntro{
        a{
            padding-top: 5px;
            margin-right: 60px;
            font-size: 14px;
            display: block;
            color: #333;
        }
        p{
            margin-top: 2px;
            font-size: 12px;
            color: #969696;
        }
    }
    .AuthorAttention{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }

`;


export const RecommendMore = styled.div`
    padding: 7px 7px 7px 12px;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align:center;
    .iconfont{
        font-size: 10px;
        margin-left: 6px;
    }
`;

export const BackTop = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1040;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    transition: .1s ease-in;
    cursor: pointer;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: block;
    .iconfont{
        font-size: 24px;
    }
`;

