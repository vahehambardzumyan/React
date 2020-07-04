import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import './SideMenu.css'
import { Link } from 'react-router-dom';

const SideMenu=(props)=>  {

 
    return (
      <div className='SideMenu'>
       <div className='AvatarWrap'>
            <Avatar
              className='bgAvatar'
              src={props.avatar}
            />
            <div className='about'>{props.name}</div>
          </div>


{/* //icon part */}
        <div className='SignOut'>
          <ListItem button key='cards' >
            <ListItemIcon>
              <Link to='/cards'>
                <AppsIcon className="icon" />
              </Link>
            </ListItemIcon>
            <ListItemText className="icontext" primary='Suits' />
          </ListItem>


          <ListItem button key='home'>
            <ListItemIcon>
              <Link to='/'>
                <HomeIcon className="icon" />
              </Link>
            </ListItemIcon>
            <ListItemText className="icontext" primary='Home'  />
          </ListItem>


          <ListItem button key='Sign Out' >
            <ListItemIcon>
              <Link to=''>
                <ExitToApp className="icon" onClick={()=>{localStorage.removeItem('token')}} />
              </Link>
            </ListItemIcon>
            <ListItemText className="icontext" primary='Sign Out'  />
          </ListItem>


        </div>

      </div>
    );
  
}
export default SideMenu;