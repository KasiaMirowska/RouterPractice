import React from 'react';

 
export default function Choices(props) {
    const selectedBreedimages = props.choices.map((dog, i)=> {
        return (
            <ul>
                <li key={i}>
                    <img src={dog} alt='example of selected breed' key={i}/>
                </li>
            </ul>
            
        )
    })

    
    return (
        <div>
            {selectedBreedimages}
        </div>
    )
}