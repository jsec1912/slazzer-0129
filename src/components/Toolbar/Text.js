import React, { Component } from 'react';
import { AddWrapper, SettingsWrapper, FieldGroup, FieldCustomLabel, TextPropertyWrapper } from '../../styledComponents/Shapes.ui';
import { FieldInput } from '../../styledComponents';
import Range from '../Range';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import { Row, Col } from 'antd';
import { TEXT_OPTIONS } from '../../config';
// import { SketchPicker } from 'react-color';

import { ColorPicker } from 'material-ui-color';
import 'bootstrap/dist/css/bootstrap.min.css';

const { Option } = Select;

export default class Text extends Component {
  // componentDidMount() {
  //   const { shapeOperations } = this.props;

  //   shapeOperations.addText();
  // }

  // updateOpacity = (newVal) => this.props.shapeOperations.updateShape({ opacity: newVal });

  // updateStroke = (property, value) => {
  //   const { shapeOperations, selectedShape: { stroke = {} } } = this.props;
  //   shapeOperations.updateShape({ stroke: { ...stroke, [property]: value }});
  // }

  // updatePropertyFromEvent = (e) => this.props.shapeOperations.updateShape({ [e.target.name]: e.target.value });

  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    }
  }

  handleClick = () => {
    console.log("clicked")
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  render() {
    const { t, selectedShape = {}, config: { theme } } = this.props;
    const {
      text = '',
      textFont = 'Arial',
      textSize = 62,
      stroke = {},
      // color = '#000000',
      opacity = 1
    } = selectedShape;

    const { displayColorPicker, color } = this.state
    console.log("optins : ", TEXT_OPTIONS)

    const background = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

    return (
      <AddWrapper>
        <SettingsWrapper>
          <FieldInput
            id="text"
            value={text}
            name="text"
            fullSize
            placeholder="Enter Text"
            style={{ minWidth: 111 }}
          // onChange={this.updatePropertyFromEvent}
          />
          <TextPropertyWrapper>
            <div className="text-proper-title">
              text properties
            </div>
            <Select defaultValue="open sans" className="mb-2" style={{ textTransform: 'capitalize', width: '100%' }}>
              {TEXT_OPTIONS.FONT_FAMILY.map(f_family =>
                <Option value={f_family}>{f_family}</Option>
              )}
            </Select>

            <Row className="mb-2">
              <Col span={12}>
                <Select defaultValue="font size" style={{ textTransform: 'capitalize', width: '100%' }}>
                  {TEXT_OPTIONS.FONT_LINEHEIGHT_SIZE.map(f_size =>
                    <Option value={f_size}>{f_size}</Option>
                  )}
                </Select>
              </Col>
              <Col span={12}>
                <Select defaultValue="line height" style={{ paddingLeft: '0.5rem', textTransform: 'capitalize', width: '100%' }}>
                  {TEXT_OPTIONS.FONT_LINEHEIGHT_SIZE.map(f_lineheight =>
                    <Option value={f_lineheight}>{f_lineheight}</Option>
                  )}
                </Select>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col span={12}>
                <Select defaultValue="medium" style={{ textTransform: 'capitalize', width: '100%' }}>
                  {TEXT_OPTIONS.FONT_REGULAR.map(f_regular =>
                    <Option value={f_regular}>{f_regular}</Option>
                  )}
                </Select>
              </Col>
              <Col span={12}>
                <Select defaultValue="smooth" style={{ paddingLeft: '0.5rem', textTransform: 'capitalize', width: '100%' }}>
                  {TEXT_OPTIONS.FONT_SMOOTHING.map(f_smoothing =>
                    <Option value={f_smoothing}>{f_smoothing}</Option>
                  )}
                </Select>
              </Col>
            </Row>
            {/* <ColorPicker value={color} onChange={this.handleChange} hideTextfield /> */}
            <Row>
              <Col span={12}>
                <input type="color" ></input>
              </Col>
            </Row>



          </TextPropertyWrapper>


          {/* <Row>
            <Col span={12}>
              <div className="cp-swatch" onClick={this.handleClick}>
                <div className="cp-color"
                  style={{ backgroundColor: background }} />
              </div>
              {displayColorPicker ? <div className="cp-popover">
                <div className="cp-cover" onClick={this.handleClose} />
                <SketchPicker color={color} onChange={this.handleChange} />
              </div> : null}
            </Col>
          </Row> */}

        </SettingsWrapper>
      </AddWrapper >
    )
  }
}