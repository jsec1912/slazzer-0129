import React, { Component } from 'react';

import { Upload } from 'antd';
import axios from 'axios';
import './custom.css';

const { Dragger } = Upload;

export default class extends Component {

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
				fData.append('output_image_format', 'base64')	
				axios.post(
					url,
					fData,
					{
						headers: {
							'Content-Type': 'multipart/form-data',
							'API-KEY': '9fd6e94f3dd24659b7961cae090cdac6'
						}
					}
				)
				.then((res) => {
          console.log("getting data  : ", res);
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
			<div className="drag-box">
        <Dragger {...props}>
            <div className="upload-box"></div>
        </Dragger>
			</div>
		);
  }
}