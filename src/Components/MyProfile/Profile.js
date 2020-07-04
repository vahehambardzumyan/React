import React from 'react';
import './Profile.css'
import SideMenu from './sideMenu/SideMenu';
import MainContent from './mainContent/MainContent';
import './Profile.css'
import Addpost from './posts/Addpost/Addpost';
import './sideMenu/SideMenu.css'


class Profile extends React.Component {

  state = {
    _id: '',
    avatar: '',
    name: '',
    email: '',
    data: [

    ]
  }

  //post fetch
  fetchUserProducts = async () => {
    try {
      const token = localStorage.getItem('token')
      const userData = await fetch('https://nameless-stream-58853.herokuapp.com/posts/profile', {
        method: 'GET',
        headers: {
          'auth-token': token
        }
      })
      const fetchedData = await userData.json()
      if (fetchedData.message) {
        console.log(fetchedData.message);
      }
      else {
        this.setState(
          {
            data: fetchedData
          })
      }
    } catch (error) {
      console.log(error);
    }
  }

  //user fetch
  fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token')
      const userData = await fetch('https://nameless-stream-58853.herokuapp.com/user/auth/profile', {
        method: 'GET',
        headers: {
          'auth-token': token
        }
      })
      const fetchedUserData = await userData.json()
      if (fetchedUserData.message) {
        console.log(fetchedUserData.message);
      }
      else {
        this.setState(
          {
            _id: fetchedUserData._id,
            avatar: fetchedUserData.avatar,
            name: fetchedUserData.name,
            email: fetchedUserData.email
          })
      }
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.fetchUserData()
    this.fetchUserProducts()
  }

  render() {
    return (
      <div className='Profile'>

        <div className='bgcard'>
          <SideMenu
            avatar={this.state.avatar}
            name={this.state.name}
          />
          <br />
          <br />
          <br />
          <Addpost />
          <MainContent
            data={this.state.data}
            toggle={this.state.open}
            open={this.handleOpen}
            close={this.handleClose}
          />
        </div>

      </div>

    );
  }
}

export default Profile;