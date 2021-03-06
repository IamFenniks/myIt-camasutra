import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../../../src/assets/img/woman1.png';
import Preloader from '../../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

// let AuthRedirectComponent = (props) => {
//     if (!props.isAuth) return <Redirect to={'/login'} />;
//     return <ProfileInfo { ...props } />
//   }

const ProfileInfo = (props) => {
 
  if (!props.profile) {
    return <Preloader />
  }
  
  return (
    <div className={s.describe}>
      <div className={s.aboutMe_grid}>
        <div>

          <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} alt="Image" />
          
          <ProfileStatus status={ props.status } updateStatus={ props.updateStatus } />

        </div>

        <div>
          <h2>{props.profile.fullName}</h2>
          <h4> About me: </h4>
          <p>{props.profile.aboutMe}</p>
          <h4> Looking for a job: </h4>
          <p> {props.profile.lookingForAJobDescription} </p>
          <h4>Contacts:</h4>
          <ul>
            <li><NavLink to="">website</NavLink></li>
            <li><NavLink to="">vk</NavLink></li>
            <li><NavLink to="">twitter</NavLink></li>
            <li><NavLink to="">instagram</NavLink></li>
            <li><NavLink to="">youtube</NavLink></li>
            <li><NavLink to="">github</NavLink></li>
            <li><NavLink to="">facebook</NavLink></li>
            <li><NavLink to="">mainLink</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;