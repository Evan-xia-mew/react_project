import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { BackTop } from './style';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
 } from './style';

class Home extends PureComponent{

handleScrollTop(){
  window.scrollTo(0,0);
}

  render(){
    return(
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4816/c4a3e25c0e339848d4f04a264623666f16fd3602.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null }

      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }
  componetWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow);
  }

  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow);
  }
}

const mapState=(state)=>({
  showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch=(dispatch)=>({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop>100){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
});

export default connect(mapState,mapDispatch)(Home);
