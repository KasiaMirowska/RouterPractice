import React from 'react';




export default class CatsMainPage extends React.Component {
    constructor(props){
        super()
        this.state = {
            catsPhotos: [],
        }
    }

    componentDidMount = () => {
        const url = 'https://api.thecatapi.com/v1/images/search?'
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
                catsPhotos : data[0].url,
            })
        })
        .catch(err => {
            this.setState({
              error: err.message
            })
          })
    }
    render(){
        const catsWelcomeImage = this.state.catsPhotos
        
        return(
            <div>
                <h1>We love cats!</h1>
                <img src={catsWelcomeImage}/>
            </div>
        )
    }
}