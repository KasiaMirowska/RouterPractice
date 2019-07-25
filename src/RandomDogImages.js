import React from 'react';
import DogsContext from './DogsContext';
import './Page1.css';

export default class Page1 extends React.Component {
    static contextType = DogsContext;

    render(){
    const dogImages = this.context.dogPhotos.map((photo, i) => {
        return (
        <li key={i}>
            <h2>Look at this dog!</h2>
            <img src={photo} className="results-img" alt="placeholder" />
        </li>
        )
      })
    return (
        <div className='page1'>
            <ul>
                {dogImages}  
            </ul> 
            
        </div>
    )
}
}