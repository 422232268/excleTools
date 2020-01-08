/*
 * @Author: za-wangxuezhong
 * @Date: 2019-11-07 23:00:08
 * @LastEditors  : za-wangxuezhong
 * @LastEditTime : 2020-01-08 13:41:51
 * @Description: file content
 */
import React, { memo } from 'react'
import ReactEcharts from 'echarts-for-react';
// import option from './data/data';
import table from 'antd';
class echarts extends React.Component{
    constructor (props) {
        super(props);
    }
    render(){
        return(
            <div>
                <ReactEcharts
                    option={this.props.option}
                    style={{height: '400px', width: '100'}}
                    opts={{renderer: 'svg'}}
                    className='react_for_echarts' />
            </div>
        );
    };
    async componentDidMount() {
        // todo
    }
}

export default echarts;
