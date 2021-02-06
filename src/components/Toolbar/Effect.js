import React, { Component } from 'react';
import { EffectWrapper, EffectIcon, EffectLabel } from '../../styledComponents';
import { getLabel, getIcon } from '../../utils';


export default class extends Component {

  // onApplyEffectsAndApply = (name) => {
  //   const { onApplyEffects, applyChanges, activeTab/* , apply  */ } = this.props
  //   console.log("name: ", name)
  //   onApplyEffects.bind(null, name)
  //   console.log("applyEffect: ", onApplyEffects)
  //   // apply()
  //   // applyChanges(activeTab);
  //   // this.setState({ activeTab: null });
  // }

  render() {
    const { active, name, onApplyEffects/* , noCapitalStrs */ } = this.props;

    return (
      <EffectWrapper active={active === name} onClick={onApplyEffects.bind(null, name)}>
        {/* <EffectWrapper active={active === name} onClick={() => this.onApplyEffectsAndApply(name)}> */}
        <EffectIcon src={getIcon(name)} />
        <EffectLabel /* noCapitalStrs={noCapitalStrs} */>{getLabel(name)}</EffectLabel>
      </EffectWrapper>
    )
  }
}