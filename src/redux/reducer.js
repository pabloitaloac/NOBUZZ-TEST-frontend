const initialState = {

}


export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case 'login':
            console.log(action?.payload);
            localStorage.setItem('currentUser',JSON.stringify(action?.payload || {}))
            return localStorage.currentUser
            break;
    
        case 'logout':
            localStorage.removeItem('currentUser')
            return localStorage.currentUser
            break;
    
        case 'getUserData':
            return localStorage.currentUser
            break;
    
        default:
            return state
            break;
    }
}