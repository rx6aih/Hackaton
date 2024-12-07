import React, {useMemo} from 'react';
import {placePost} from "../Services/OurApi/index.js";

export const usePlaces = (places, newPlace) => {
    return useMemo(() =>{
        const response = placePost(newPlace);
        console.log(response + "in use");
        return [...places, newPlace];
    },[places]);
}

export default usePlaces;