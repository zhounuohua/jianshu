import React, { PureComponent } from 'react';
import { BorderItem, BorderList, BorderDownloadApp, } from '../style'
import { connect } from 'react-redux';

class Border extends PureComponent {
    render(){
    const {list} = this.props;
        return(
            <div>
                <BorderItem>
                    {
                        list.map((item)=>{
                            return(
                                <BorderList key={item.get('id')}>
                                    <img className='BorderListImg' src={item.get('imgUrl')}  alt=''/>
                                </BorderList>
                            )
                        })
                    }
                    <BorderDownloadApp>
                    <img className='BorderListCard' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'  alt=''/>
                    <div className='BorderDownloadRight'>
                        <div>
                            下载简书手机App
                            <i className='iconfont'>&#xe648;</i>
                        </div>
                        <div className='BorderDownloadT'>随时随地发现和创作内容</div>
                    </div>             
                    </BorderDownloadApp>
                </BorderItem>
            </div>
        )
    }
} 

const mapState = (state) => ({
    list: state.getIn(['home','boardList'])
});

export default connect(mapState, null)(Border);