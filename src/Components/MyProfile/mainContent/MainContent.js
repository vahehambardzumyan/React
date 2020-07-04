import React from 'react';
import Posts from '../posts/Posts'
import './MainContent.css'

const MainContent = (props) => {


  return (
    <main className='mainContent'>
      <div className='content'>
        <Posts
          data={props.data.reverse()} />
      </div>
    </main>
  );
};

export default MainContent;