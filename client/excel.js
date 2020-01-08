/*
 * @Author: za-wangxuezhong
 * @Date: 2019-11-06 17:08:05
 * @LastEditors  : za-wangxuezhong
 * @LastEditTime : 2020-01-08 13:56:34
 * @Description: file content
 */
import React, { Fragment } from 'react';
import axios from 'axios';
import { Upload, Button, Icon } from 'antd';
import './excle.less';
class App extends React.Component {
    constructor (props) {
        super(props);
    }
    state = {
        option: {},
    }
    render() {
        const fileList = [
            {
                uid: '-1',
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-2',
                name: 'yyy.png',
                status: 'error',
            },
        ];

        const props = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            listType: 'picture',
            defaultFileList: [...fileList],
        };

        const props2 = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            listType: 'picture',
            defaultFileList: [...fileList],
            className: 'upload-list-inline',
        };
        return (
            <Fragment>
            <div>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> Upload
                 </Button>
                </Upload>
                <br />
                <br />
                <Upload {...props2}>
                    <Button>
                        <Icon type="upload" /> Upload
                 </Button>
                </Upload>
            </div> ,
                mountNode,
            </Fragment>
        );
    }
    async componentDidMount() {
        // const options = await option1();
        // this.setState({option: options})
    }
    async hah() {
    }
}
export default App;

//#endregion
