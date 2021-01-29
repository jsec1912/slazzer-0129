import React, { Component } from 'react';

import  Upload  from 'antd/lib/upload';
import axios from 'axios';
import './custom.css';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const { Dragger } = Upload;

export default class extends Component {
  state = {
  percent : 0
  }
  render() {
    const {
      setDropped,
      handleReceivedImg
    } = this.props;
	
    const props = {
      name: 'file',
      multiple: false,
      onChange: info => {

        const url = 'https://www.slazzer.com/api/v1/remove_image_background';
        const fData = new FormData();
        fData.append('source_image_file', info.file);
        fData.append('output_image_format', 'base64');

        // const config = {
         
          // onUploadProgress: progressEvent => {
          //   console.log("loaded : ", progressEvent.loaded)
          //   this.setState({
          //     percent: Math.floor((ProgressEvent.loaded * 100) / progressEvent.total)
          //   })
          //   // let percentCompleted = Math.floor((ProgressEvent.loaded * 100) / ProgressEvent.total);
          // }
        
        console.log('server upload start')
        axios.post(
          url,
          fData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'API-KEY': '9fd6e94f3dd24659b7961cae090cdac6'
            },
            onUploadProgress: progressEvent => {
              console.log("loaded : ", progressEvent.loaded)
              this.setState({
                percent: Math.floor((progressEvent.loaded * 100) / progressEvent.total)
              })
              // let percentCompleted = Math.floor((ProgressEvent.loaded * 100) / ProgressEvent.total);
            }
          },
          )
          .then((res) => {
            setDropped()
            handleReceivedImg(res.data.output_image_base64)
					
          })
          .catch(errors => console.log(errors.data));
      },

      beforeUpload: file => {
        return false
      },
    };

    return (
      <>
        {console.log("percent :", this.state.percent)}
			<div className="drag-box">
        <Dragger {...props}>
            <div className="upload-box"></div>
        </Dragger>
      </div>
        <Progress
          theme={
            {
              error: {
                symbol: this.state.percent + '%',
                trailColor: 'pink',
                color: 'red'
              },
              default: {
                symbol: this.state.percent + '%',
                trailColor: 'lightblue',
                color: 'blue'
              },
              active: {
                symbol: this.state.percent + '%',
                trailColor: 'yellow',
                color: 'orange'
              },
              success: {
                symbol: this.state.percent + '%',
                trailColor: 'lime',
                color: 'green'
              }
            }
          }
         />
        </>
		);
  }
}