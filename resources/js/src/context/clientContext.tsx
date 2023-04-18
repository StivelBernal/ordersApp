import React, { createContext, useReducer } from 'react';
import { clientState, ClientReducer } from "./clientReducer";
import { useEffect } from 'react';
import { hasValue } from '../../utils';

type ClientContextProps = {
    dataOrder: any;
    setDataOrder: (state: any) => void;
}

const initialState: clientState = {
    dataOrder: null
}

const ClientContext = createContext({} as ClientContextProps);

export const ClientProvider = ({ children, dataDefault }: any) => {

    useEffect(() => {
        if (hasValue(dataDefault)) {
            let cities = []
            for (const key in dataDefault.data) {
                cities.push({ ...dataDefault.data[key], ...{ name: key} })
            }
            console.log(cities)
            setDataOrder(cities)
        }
    }, [dataDefault])
    
    const [state, dispatch] = useReducer(ClientReducer, initialState);

    const setDataOrder = (state: any) => {
        dispatch({ type: 'setDataOrder', payload: state });
    };
    
    return (
        <ClientContext.Provider value={{ 
            ...state,
            setDataOrder
        }}>
            {children}
        </ClientContext.Provider>
    )
}

export default ClientContext;
