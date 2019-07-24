import React from 'react';
import DogsContext from './DogsContext';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Header';
import DogImages from './DogImages';
import BreedChoicesFetcher from './BreedChoicesFetcher';
import ChoicesDisplay from './ChoicesDisplay';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dogPhotos: [],
    }

  }

  updateDogImages = (images) => {
    this.setState({
      dogPhotos: images,
    })
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
    const contextValue = {
      dogPhotos: this.state.dogPhotos,
      updateDogImages: this.updateDogImages,
    }


  return (
    <div>
      <header>
        <Route path='/' render={() => <Header />} />
      </header>
      {error}
      <div className="App">
        <DogsContext.Provider value={contextValue}>
          <div className='left'>
            <Route path='/' component={DogImages} />
          </div>
          <div className='right'>
            <Route path='/' component={BreedChoicesFetcher} />
          </div>
        </DogsContext.Provider>
      </div>
    </div>
  );
}
}


