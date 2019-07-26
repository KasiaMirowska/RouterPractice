import React from 'react';
import CatsBreeds from './CatsBreeds';


export default class CatsBreedsFetcher extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            catsPhotos: null,
            breeds: [],
            selection: null,
        }
    }
    
    componentDidMount = () => {
        const url = 'https://api.thecatapi.com/v1/breeds';
        const options = {
            method: 'GET',
            headers: {
                'authorization': '713102a4-355f-41db-9fcc-2319787c55fb',
                'Content-Type': 'application/json'
            }
        }
        fetch(url, options)
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
                    breeds : data,
                })
            })
            .catch(err => {
                this.setState({
                  error: err.message
                })
              })
    }
    
    
    setSelection = (id) => {
            console.log(id, 'HERE ???HERE?????')
            this.setState({
                selection: id,
            })
            this.handleSelectingBreed(this.state.selection)
        }
        
    handleSelectedBreed = (selection) => {
        const url = `https://api.thecatapi.com/images/search?breed_id=${selection}`
        const options = {
        method: 'GET',
        headers: {
            'authorization': '713102a4-355f-41db-9fcc-2319787c55fb',
            'Content-Type': 'application/json'
        }
    }
        fetch(url, options)
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
                    catsPhotos : data,
                })
            })
            .catch(err => {
                this.setState({
                  error: err.message
                })
              })
            
            this.context.updateCatImages(this.state.catsPhotos)
        }
    
    render() {
        const error = this.state.error
        ? <div className='error'>{this.state.error}</div>
        : '';
        return(
            <div>
                 
                <CatsBreeds breeds={this.state.breeds} choice={this.setSelection} />
            </div>
        )
    }
}
