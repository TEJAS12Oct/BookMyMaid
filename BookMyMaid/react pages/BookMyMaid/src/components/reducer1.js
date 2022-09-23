

const reducer1 = (state, action) =>{
    
    switch(action.type)
    {
        case 'LOGGEDIN':
            return {...state , loggedin: true}
                
        case 'LOGGEDOUT':
            return {...state , loggedin: false}
    }

}
export default reducer1;