import React from 'react';
import AppContext from './AppContext';
import Breeds from './Breeds';



export default class Page1 extends React.Component {
    static contextType = AppContext;
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
        this.setState({
            selected: selection  
        })
        this.handleSelectionChange(selection)
    }

    handleSelectionChange(selection) {
        const url = `https://dog.ceo/api/breed/${selection}/images`
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error('something went wrong')
            }
            return response;
        })
        .then(res => res.json())
        .then( data => {
            this.setState({
                dogPhotos: data.message,
            })
            this.context.updateDogImages(this.state.dogPhotos)
    })
}

    render(){
        console.log(this.props)
        const error = this.state.error
        ? <div className='error'>{this.state.error}</div>
        : '';

        const dogBreeds = Object.keys(this.state.breeds)

        
        return (
            <div className='page2'>
                <button onClick={() => this.props.history.goBack()}>Back</button>
                {/* //history not working the way it should/going to far back */}
                <Breeds dogBreeds={dogBreeds} dogChoice={(selection) => this.setSelected(selection)}/>
            </div>
        )
    }
    
}