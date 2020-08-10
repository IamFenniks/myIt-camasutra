import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <article className={s.article}>
      <div className={s.banner}><img src="https://cdn.pixabay.com/photo/2015/11/19/08/52/banner-1050629_960_720.jpg" alt="Banner" /></div>

      <div className={s.describe}>
        <img src="https://cdn.pixabay.com/photo/2016/06/14/09/33/bulldog-1456110__340.png" alt="Image" />
        
        <div>
          My post
          <div>
                New posts
          </div>

          <div>
            All posts
            <div className={s.posts}>Post 1</div>
            <div className={s.item}>Post 2</div>
            <div className={s.item}>Post 3</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Profile;