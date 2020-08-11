import React from 'react';
import s from './News.module.css';

const News = () => {
  return (
    <div>
      <div className={s.banner}><img src="https://cdn.pixabay.com/photo/2015/11/19/08/52/banner-1050629_960_720.jpg" alt="Banner" /></div>

      <div className={s.describe}>
        <img src="https://cdn.pixabay.com/photo/2016/06/14/09/33/bulldog-1456110__340.png" alt="Image" />
        
      </div>
    </div>
  );
}

export default News;