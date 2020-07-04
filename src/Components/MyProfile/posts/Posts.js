import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import './Posts.css'



 
const Posts = (props) => {



  const posts = props.data.map(tile => (
      <GridListTile 
      className='PostsImgs'
      key={tile.imgUrl}>
        <img className='PostsImg'
        src={tile.imgUrl} 
        alt={tile.title} />
        <GridListTileBar 
          className="text"
          title={tile.title}
          
        />
        
      </GridListTile>
    )
  )

  return (
    <div className='Posts'>
         
      <GridList  className='gridList'>
        {posts}
      </GridList>
      
    </div>
  );
}

export default Posts