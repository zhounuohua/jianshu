import React, { PureComponent } from 'react';
import { AuthorsRenewal, Recommend,RecommendTop, RecommendItem, RecommendMore ,RecommendList} from '../style';
import { connect } from 'react-redux';


class RecommendAuthors extends PureComponent{
    
    render(){
    const {list , handleChangePage} = this.props;    
        return(
            <div>
                <Recommend>
                    <RecommendTop>
                        推荐作者 
                        <AuthorsRenewal onClick={()=>handleChangePage(this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon=icon}} className=" spin iconfont">&#xe6b5;</i>
                            换一批
                        </AuthorsRenewal>
                    </RecommendTop>
                    <RecommendItem>
                        {
                            list.map((item)=>{
                                   return(
                                    <RecommendList key={item.get('id')}>
                                        <a className='AuthorImg'><img src={item.get('imgUrl')} alt=''/></a>
                                        <a className='AuthorAttention'>+关注</a>                            
                                        <div className='AuthorIntro'>
                                            <a>{item.get('name')}</a>
                                            <p>{item.get('intro')}</p>
                                        </div>
                                    </RecommendList>
                                   )
                            })
                        }
                       
                    </RecommendItem>
                    <RecommendMore>
                        查看全部
                        <i className="iconfont">&#xe648;</i>
                    </RecommendMore>
                </Recommend>
            </div>
        )
    }
}

const mapState =(state) =>({
    list:state.getIn(['home','authorsList'])

});

const mapDispathToProps = (dispatch) =>{
return{
    handleChangePage( spin ){
        let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
        if(originAngle) {
            originAngle = parseInt( originAngle, 10);
        }else{
            originAngle = 0;
        }
        spin.style.transform = 'rotate('+(originAngle+360) +'deg)';

    }
}
    
}

export default connect(mapState,mapDispathToProps)(RecommendAuthors);