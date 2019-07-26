import React from 'react';
import AppContext from './AppContext';
import './Page1.css';

export default class RandomDogImages extends React.Component {
    static contextType = AppContext;

    render(){
        console.log(this.context)
        if(this.context.dogPhotos) {
            const dogImages = this.context.dogPhotos.map((photo, i) => {
                console.log('are we getteing here??????????????')
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
        }else {
            return (
                <div>waiting for connection</div>
            );
        }
        
}
}