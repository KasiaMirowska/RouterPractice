import React from 'react';


export default function Breeds(props) {
    const breeds = props.dogBreeds.map((breed, i) => {
        return (
           <option value={breed} key={i}>
               {breed}
           </option>
        )
    })

    const choice = (value) => {
        if(value === 'none') {
            props.dogChoice(null)
        } else {
            const selection = props.dogBreeds.find(breed => breed === value);
            props.dogChoice(selection)
        }
    }
    
    return (
        <div>
            <form>
                <label htmlFor='breed'>Select a breed: </label>
                <select 
                    id='breed' 
                    name='breed'
                    onChange={ e => choice(e.target.value)}>
                    <option value='none'>Select one...</option>
                    {breeds}
                </select>
            </form>
        </div>
    )
}