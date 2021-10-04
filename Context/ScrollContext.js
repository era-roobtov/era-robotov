import React, {createContext, useEffect, useState} from "react";

export const ScrollContext = createContext(null);
export const SCROLL_NODE = 'nodeToScroll';

const ScrollContextProvider = ({children}) => {
    const [scroll, setScroll] = useState({
        isScroll: '',
        cords: null
    });
    const val = {scroll, setScroll};

    useEffect(() => {
        console.log('from context > ',scroll)
    }, [scroll])


    return (
        <ScrollContext.Provider value={val}>
            {children}
        </ScrollContext.Provider>
    )
};

export default ScrollContextProvider;
