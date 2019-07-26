import React from 'react';
import AppContext from './AppContext';
import Header2 from './Header2';
import RandomDogImages from './RandomDogImages';
import BreedChoicesFetcher from './BreedChoicesFetcher';
import './Page1.css';



export default class DogsMainPage extends React.Component {
  static contextType = AppContext;
  constructor(props){
    super(props);
    this.state = {
      dogsPhotos: null,
    }

  }

  // updateDogImages = (images) => {
  //   this.setState({
  //     dogPhotos: images,
  //   })
  // }
  
  

  render(){
    const error = this.state.error
              ? <div className='error'>{this.state.error}</div>
              : '';
    // const contextValue = {
    //   dogPhotos: this.state.dogPhotos,
    //   updateDogImages: this.updateDogImages,
    // }


  return (
    <div>
      
        <header>
          <Header2 />
        </header>
      
      {error}
      <div className="App">
        {/* <AppContext.Provider value={contextValue}> */}
          < />
          < />
         
        
        {/* </AppContext.Provider> */}
      </div>
    </div>
  );
}
}


