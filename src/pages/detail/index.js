import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import{ DetailWrapper,
        Header,
        Author,
        Avatar,
        Info,
        Name,
        Meta,
        Content
 } from './style';

class Detail extends PureComponent {
    render(){
        console.log(this.props.match.params.id)
        const{ 
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
        } = this.props;
        return(
            <DetailWrapper>
                <Header>
                {title}
                </Header>
                <Author>
                   <Avatar>
                    <img alt="" src={nameImg}/>
                    </Avatar>
                    <Info>
                        <Name>
                            <a href="/u/72de72b1a46b">{id}-{name}</a>
                        </Name>
                        <img alt="" className="badgeIcon" title="" src="//upload.jianshu.io/user_badge/f4073b9f-96ea-48f3-ba7b-bb0bb3ad0b61"  />                        
                        <a className="btn btn-success follow"><i className="iconfont"></i><span>关注</span></a>
                        <Meta>
                            <span >{publishTime}</span>
                            <span >字数 {wordage}</span>
                            <span >阅读 {viewsCount}</span>
                            <span >评论 {commentsCount}</span>
                            <span >喜欢 {likesCount}</span>
                        </Meta>
                    </Info> 
                </Author>
                <Content
                    dangerouslySetInnerHTML={{__html: content}}
                />
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState = (state)=>({
    id:state.getIn(['detail','id']),
    title:state.getIn(['detail','title']),
    name: state.getIn(['detail','name']),
    nameImg: state.getIn(['detail','nameImg']),
    content: state.getIn(['detail','content']) ,
    publishTime: state.getIn(['detail','publishTime']),
    wordage: state.getIn(['detail','wordage']),
    viewsCount: state.getIn(['detail','viewsCount']),
    commentsCount: state.getIn(['detail','commentsCount']),
    likesCount: state.getIn(['detail','likesCount'])
})

const mapDispatch = (dispatch) =>({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
        
    }
})
export default connect (mapState,mapDispatch)(withRouter(Detail));
