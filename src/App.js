import React from 'react'
import Home from './Components/Home/Home'
import Profile from './Components/MyProfile/Profile'
import Cards from './Components/Cards/Cards'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Auth from './Components/Auth/Auth';

class App extends React.Component {

  // state = {
  //   token: null,
  //   error: '',
  //   cards: [

  //   ]
  // }

  // fetchData = async () => {
  //   try {
  //     const data = await fetch('https://nameless-stream-58853.herokuapp.com/posts')
  //     const fetchedData = await data.json()
  //     console.log(fetchedData);
  //     if (fetchedData.message) {
  //       this.setState({ error: fetchedData.message })
  //     }
  //     else{
  //       this.setState({ cards: fetchedData })
  //     }

  //   } catch (error) {
  //     this.setState({ error: 'Try again' })

  //   }
  // }

  // componentDidMount() {
  //   this.fetchData()
  // }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cards' render={() => <Cards  />} />
          <Route path='/auth' render={() => <Auth />} />
          <Route path='/myProfile' component={() => <Profile />} />
        </Switch>
      </div>
    )
  }
}

export default App