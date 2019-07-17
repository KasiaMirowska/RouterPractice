import React from 'react';
import './Page1.css';

export default function Page1(props) {
    const dogImages = props.dogs.map((photo, i) => {
        return (<li key={i}>
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