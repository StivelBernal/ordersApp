export interface clientState {
    dataOrder: any;
}

type AuthAction = 
        | { type: 'setDataOrder', payload: any }
        
export const ClientReducer = ( state: clientState, action: AuthAction ): clientState => {
    
    switch (action.type) {

        case 'setDataOrder':
            console.log(action.payload)
            return {
                ...state,
                dataOrder: action.payload,

            }
        default:
            return state;
    }

}
