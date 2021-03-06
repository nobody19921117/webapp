import './BottomBar.scss';

import React from 'react';

import { connect } from 'react-redux';//讲react组件和redux结合的方法

//引入change——tab的action
import { changeTab } from '../actions/tabAction';

/** 
 * @constructor <BottomBar>
 * @description 首页底部tab栏
*/

class BottomBar extends React.Component {
    constructor(props) {
        super(props)
    }
    changeTab(item){
        this.props.dispatch(changeTab({
            activeKey: item.key
        }));
    }
    renderItems() {
        let tabs = this.props.tabs;

        return tabs.map((item, index)=>{

            let cls = item.key + ' btn-item';
            let name = item.name;

            //判断当前是否为被点击状态
            if(item.key === this.props.activeKey){
                cls += ' active';
            }

            return (
                // 如果组件采取循环方式渲染，每个item就得加入一个key
                <div key={index} className={cls} onClick={()=>this.changeTab(item)}>
                <div className="tab-icon"></div>
                <div className="btm-name">{name}</div>
                </div>
            )
        })
    }
    render() {
        return(
            <div className="bottom-bar">
                {this.renderItems()}
            </div>
        )
    }
}

export default connect(
    state =>({
        tabs: state.tabReducer.tabs,
        activeKey: state.tabReducer.activeKey,
    })
)(BottomBar);