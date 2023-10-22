import {useEffect} from 'react';

export const useOnKeyPress = (callback) => {
    useEffect(()=>{
        const keyPressHandler = (e) => {
            if(e.key === 'Enter') {
                callback();
            }
        };
        window.addEventListener('keydown',keyPressHandler);
        return () => {
            window.removeEventListener('keydown',keyPressHandler);
        };
    },[callback])
}