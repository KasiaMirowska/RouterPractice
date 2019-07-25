import React from 'react';
import DogsContext from './DogsContext';
import Header2 from './Header2';
import DogImages from './RandomDogImages';
import BreedChoicesFetcher from './BreedChoicesFetcher';
import './Page1.css';



export default class DogsMainPage extends React.Component {
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
          <Header2 />
        </header>
      
      {error}
      <div className="App">
        <DogsContext.Provider value={contextValue}>
          <BreedChoicesFetcher />
          <DogImages />
         
        
        </DogsContext.Provider>
      </div>
    </div>
  );
}
}


