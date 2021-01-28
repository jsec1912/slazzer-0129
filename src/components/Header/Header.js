import React, { Component } from 'react';
import {
  HeaderWrapper, HeaderTop, Title, ButtonsWrapper, ToolbarWrapper, CancelBtn, CloseBtn,LogoImgWrapper,SelectScreenWrapper
} from '../../styledComponents';
import { Toolbar } from '../';
import { ON_CLOSE_STATUSES } from '../../config';
import MuiButton from '@material-ui/core/Button';
import Icon from '../icon/Icon';
import { withStyles } from '@material-ui/core/styles';




export default class extends Component {
  
  render() {
    const {
      activeTab, onRevert, apply, onClose, processWithCloudService, processWithFilerobot,
      handleSave, t, config
    } = this.props;
    const applyAndSave = () => { apply(handleSave); };

    const Button = withStyles({
      root: {
        fontSize: '12px',
        textTransform: 'capitalize',
        fontFamily: 'Poppins',
        padding: '5px 10px'
      },
      startIcon: {
        marginRight: '4px',
        '&>i': {
          fontSize: '15px!important'
        }
      },
      outlined: {
        border: '1px solid #a1a1a1'
      }
    })(MuiButton)

    return (
      <HeaderWrapper>
        <HeaderTop>
          <LogoImgWrapper>
            <a href="#"><img src="assets/images/white-logo.png"></img></a>
          </LogoImgWrapper>
          <SelectScreenWrapper>
            <span className="text-capitalize mr-1">Popular Format</span>
            
          </SelectScreenWrapper>
          <ButtonsWrapper>
            <Button
              className="text-white mr-2"
              variant="outlined"
              onClick={() => { }}
              >
              Change API Key
            </Button> 
            <Button
              variant="contained"
              className="bg-danger text-white"
              style={{border: '1px solid #dc3545'}}
              startIcon={<Icon name="upload" />}
              onClick={()=>{}}
              >
              Upload Image
            </Button>
          </ButtonsWrapper>
          {/* <ButtonsWrapper>
            <CancelBtn
              hide={!activeTab}
              onClick={isOneTool ? cancelBtnClosingFn : onRevert}
              noCapitalStrs={noCapitalStrs}
              sm default fullSize
            >
              {t[`toolbar.cancel`]}
            </CancelBtn>
            <Button
              themeColor
              sm
              success={!activeTab || activeTab === 'resize'}
              themeBtn={activeTab}
              onClick={isOneTool ? applyAndSave : !activeTab ? () => { handleSave(); } : () => { apply(); }}
            >
              {!activeTab || activeTab === 'resize' ? onFinishButtonLabel : t['toolbar.apply']}
            </Button>
          </ButtonsWrapper> */}
    
        </HeaderTop>

        {/* <ToolbarWrapper overlayYHidden={activeTab !== 'watermark'}>
          <Toolbar {...this.props}/>
        </ToolbarWrapper> */}
      </HeaderWrapper>
    )
  }
}