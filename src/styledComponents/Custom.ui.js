import React, { Fragment } from 'react';
import styled from 'styled-components';


const WorkareaWrapper = styled.div`
 diplay: flex;
 justify-content: center;
 align-items: center;
 width: ${props=>props.activeToolItems ? 'calc(100% - 260px)' : '100%'};
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
  display: flex;
`;

export { WorkareaWrapper, ToolbaritemsWrapper, SelectScreenWrapper };
