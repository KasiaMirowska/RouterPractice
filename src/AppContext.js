import React from 'react';

const AppContext = React.createContext({
    dogPhotos: [],
    updateDogImages: () => {},
    catsPhotos: [],
    updateCatImages: () => {},
})
export default AppContext;