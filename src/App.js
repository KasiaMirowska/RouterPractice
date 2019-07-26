import React from 'react';
import {Route, Link} from 'react-router-dom';
import AppContext from './AppContext.js';
import './App.css';
import Header from './Header';
import BreedChoicesFetcher from './BreedChoicesFetcher';
import RandomDogImages from './RandomDogImages';
import CatsImages from './CatsImages';
import LoverOfBoth from './LoverOfBoth';
import Header2 from './Header2';
import Header3 from './Header3';
import CatsBreedsFetcher from './CatsBreedsFetcher.js';

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dogsPhotos: [],
            catsPhotos: [],
        }
    }

    updateDogImages = (images) => {
        this.setState({
          dogPhotos: images,
        })
      }

    updateCatImages = (images) => {
        this.setState({
          catsPhotos: images,
        })
      }
    
    componentDidMount() {
        const dogsURL= 'https://dog.ceo/api/breeds/image/random/10';
        fetch(dogsURL)
        .then(response => {
          if(!response.ok){
            throw new Error('check your url and try again');
          }
          return response;
        })
        
        .then(res => res.json())
        .then(data => {
          console.log(data, 'am I HERE?????')
          this.setState({
            dogPhotos: data.message,
          })
        })
        .catch(err => {
          this.setState({
            error: err.message,
          })
        })

        const catsURL = 'https://api.thecatapi.com/v1/images/search?'
        const options = {
            method: 'GET',
            headers: {
                'authorization': '713102a4-355f-41db-9fcc-2319787c55fb',
                'Content-Type': 'application/json'
            }
        }
        fetch(catsURL, options)
        .then(res => {
            if(!res.ok) {
                throw new Error('something went wrong')
            }
            return res;
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                catsPhotos : data[0].url,
            })
        })
        .catch(err => {
            this.setState({
              error: err.message
            })
          })
      }


    render() {
        const error = this.state.error
        ? <div className='error'>{this.state.error}</div>
        : '';

        const contextValue = {
            dogPhotos: this.state.dogPhotos,
            updateDogImages: this.updateDogImages,
            catsPhotos: this.state.catsPhotos,
            updateCatImages: this.state.updateCatImages,
          }
        return(
            <div>
                {error}
                <Link to='/'>
                    <Header />
                </Link>
                
                <h3>Are you a dog lover, cat lover or both?</h3>
                <Link to={'/dogs'} >
                    <h4>Dog Lover</h4>
                </Link>
                <Link to={'/cats'}>
                    <h4>Cat Lover</h4>
                </Link>
                <Link to={'/both'}>
                    <h4>Loves both</h4>
                </Link>
                <AppContext.Provider value={contextValue}>
                    <Route exact path='/dogs' component={Header2} />
                    <Route exact path='/dogs' component={BreedChoicesFetcher} />
                    <Route exact path='/dogs' component={RandomDogImages} />
                    
                    <Route exact path='/cats' component={Header3} />
                    <Route exact path='/cats' component={CatsBreedsFetcher} />
                    <Route exact path='/cats' component={CatsImages} />
        
                    <Route exact path='/both' component={LoverOfBoth} />
                    <Route exact path='/both' component={BreedChoicesFetcher} />
                    <Route exact path='/both' component={RandomDogImages} />
                    <Route exact path='/both' component={CatsBreedsFetcher} />
                    <Route exact path='/both' component={CatsImages} />
               </AppContext.Provider>
            </div>
        )
    }
}