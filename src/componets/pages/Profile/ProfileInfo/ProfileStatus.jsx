import React from 'react';

import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  onActivateEditMode = () => {
    // this.state.editMode = true;
    // this.forceUpdate();
    //           Верная альтернатива ----
    this.setState ({
      editMode: true
    })
  }

  onDeactivateEditMode = () => {
    this.setState ({
      editMode: false
    })
  }

  render() {
    return (
      <div className={s.status}>
        { !this.state.editMode && 
          <div>
            <span onClick={ this.onActivateEditMode }>{this.props.status} edit...</span>
          </div>
        }

        { this.state.editMode && 
          <div>
            <input value={this.props.status} onBlur={ this.onDeactivateEditMode } autoFocus={ true } />
          </div>
        }
      </div>
    );
  }
}
export default ProfileStatus;