import React from 'react';

import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
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
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    //debugger;
    if(prevProps !== this.props){
      this.setState({
        status: this.props.status
      });
    }
    //let a = this.props;
    //let b = this.state;
  }

  render() {
    return (
      <div className={s.status}>
        { !this.state.editMode && 
          <div>
            <span onClick={ this.onActivateEditMode }>
              {this.props.status || "No status to "} edit...
            </span>
          </div>
        }

        { this.state.editMode && 
          <div>
            <input 
              onChange={ this.onStatusChange } 
              value={this.state.status} 
              onBlur={ this.onDeactivateEditMode } 
              autoFocus={ true } />
          </div>
        }
      </div>
    );
  }
}
export default ProfileStatus;