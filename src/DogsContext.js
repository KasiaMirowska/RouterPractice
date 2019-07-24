import React from 'react';

const DogsContext = React.createContext({
    dogPhotos: [],
    updateDogImages: () => {},
})
export default DogsContext;