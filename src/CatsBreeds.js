import React from 'react';


export default function CatsBreeds(props) {
    const breeds = props.breeds.map((breed, id) => {
        return(
            <option value={breed.id} key={breed.id}>
                {breed.name}
            </option>
        )
    })

    const choice = (value) => {
        if(value === 'none') {
            props.choice(null)
        } else {
            const id = props.breeds.find(breed => breed.id === value);
            props.choice(id)
        }
    }
     
    return(
        <div>
            <form>
                <label htmlFor='breed'>Select a breed: </label>
                <select 
                    id='breed' 
                    name='breed'>
                    onChange={(e) => console.log(e.target)}>
                    <option value='none'>Select one...</option>
                    {breeds}
                </select>
            </form>
        </div>
    )
}