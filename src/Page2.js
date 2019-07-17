import React from 'react';
import Breeds from './Breeds';
import Choices from './Choices';
// import { Link } from 'react-router-dom';

export default class Page1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dogPhotos: null,
            breeds: [],
            selected: null,
        }
        
    }

    componentDidMount() {
        const url = 'https://dog.ceo/api/breeds/list/all'
        fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error('something went wrong')
            }
            return response;
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                breeds: data.message,
            })
        })
        .catch(err => {
            this.setState({
                error: err.message,
            })
        })
    }
    
    setSelected(selection) {
        console.log(selection)
        this.setState({
            selected: selection  
        })
        this.handleSelectionChange(selection)
    }

    handleSelectionChange(selection) {
        const url = `https://dog.ceo/api/breed/${selection}/images`
        console.log(url)
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error('something went wrong')
            }
            return response;
        })
        .then(res => res.json())
        .then( data => {
            console.log(data.message)
            this.setState({
                dogPhotos: data.message,
            })
        })

    }

    render(){
        const error = this.state.error
        ? <div className='error'>{this.state.error}</div>
        : '';

        const pickedDogPhotos = this.state.dogPhotos ?
                                <Choices choices={this.state.dogPhotos} />
                                : <div className='placeholder'>Select a breed from above</div>
       
    
        const dogBreeds = Object.keys(this.state.breeds)
        // const here = <Link to='/chosenBreed'>here</Link>
        
        return (
            <div className='page2'>
                {error}
                
                <Breeds dogBreeds={dogBreeds} dogChoice={(selection) => this.setSelected(selection)}/>
                {/* <p>Click {here} to view images of {this.state.selected}</p> */}
                {pickedDogPhotos}
            </div>
        )
    }
    
}