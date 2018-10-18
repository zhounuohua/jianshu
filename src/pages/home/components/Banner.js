import React ,{ PureComponent } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';


class Banner extends PureComponent {
    render(){
        const {list} = this.props;
        return(
            <div> 
                <Carousel 
                autoplay 
                >
                {
                    list.map((item)=>{
                        return(
                            <div key={item.get('id')} ><img className='banner' alt='' src={item.get('imgUrl')}/></div>
                        )
                    })
                }
                </Carousel>
            </div>
        )
    }
}

const mapState = (state)=>({
    list: state.getIn(['home','bannerlist'])
});

export default connect(mapState,null)(Banner);