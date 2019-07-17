import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Header';
import Page1 from './Page1';
import Page2 from './Page2';
import Choices from './Choices';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dogPhotos: [],
    }

  }

  componentDidMount() {
    const url= 'https://dog.ceo/api/breeds/image/random/10';
    
    fetch(url)
    .then(response => {
      if(!response.ok){
        throw new Error('check your url and try again');
      }
      return response;
    })
    
    .then(res => res.json())
    .then(data => {
      this.setState({
        dogPhotos: data.message,
      })
    })
    .catch(err => {
      this.setState({
        error: err.message,
      })
    })

  }

  render(){
    const error = this.state.error
              ? <div className='error'>{this.state.error}</div>
              : '';
  return (
    <div>
      <header>
        <Route path='/' render={() => <Header />} />
      </header>
      {error}
      <div className="App">
        <div className='left'>
          <Route path='/' render={() => <Page1 dogs={this.state.dogPhotos} /> } />
          {/* <Route exact path='/chosenBreed' render={(props) => <Choices {...props} dogs={this.state.dogPhotos}/>} /> */}
        </div>
        <div className='right'>
          <Route path='/' render={() => <Page2 />} />
        </div>
      </div>
    </div>
  );
}
}


