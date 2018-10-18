import React ,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends PureComponent {
    render(){
        return(
            <div> 
                <TopicWrapper>
                    {
                        this.props.list.map((item)=>{
                            return(
                                <TopicItem key = {item.get('id')}>
                                    <img 
                                    className='topicItem-img' 
                                    src={item.get('imgUrl')}
                                    alt=''
                                    />
                                    <div className='name'>{item.get('title')}</div>
                                </TopicItem> 
                            )
                        })
                    }
                     
                </TopicWrapper>
            </div>
        )
    }
}


const mapState = (state) => ({
    list: state.get('home').get('topicList')
});
export default connect(mapState, null) (Topic);