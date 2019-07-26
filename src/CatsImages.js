import React from 'react';
import AppContext from './AppContext';




export default class CatsImages extends React.Component {
   static contextType = AppContext;
    render(){
        console.log(this.context)
        
        const catsWelcomeImage = this.context.catsPhotos
        
        return(
            <div>
                
                <h3>Look at this beauty!</h3>
                <img src={catsWelcomeImage}/>
            </div>
        )
    }
}