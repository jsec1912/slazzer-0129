import React, { Fragment } from 'react';
import styled from 'styled-components';


const WorkareaWrapper = styled.div`
 diplay: flex;
 justify-content: center;
 align-items: center;
 width: ${props => props.activeToolItems ? 'calc(100% - 260px)' : '100%'};
 padding: 1rem;
 transition: 0.5s ease;
`;

const ToolbaritemsWrapper = styled.div`
  width: 260px;
  position: absolute;
  right: 0;
  height: 100%;
  padding: 20px 15px;
  background-color: #323232;
`;

const SelectScreenWrapper = styled.div`
  display: inline-block;
  align-items: center;

  .resolution-title {
    font-size: 12px;
    text-transform: uppercase;
    line-height: 18px;
    color: #a1a1a1;
    margin-right: 5px;
  }

  .ant-select-selector {
    background-color: transparent!important;
    border: 1px solid #a1a1a1!important;
    border-radius: 5px!important; 
  }
`;

export { WorkareaWrapper, ToolbaritemsWrapper, SelectScreenWrapper };
