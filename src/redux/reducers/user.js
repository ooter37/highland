import axios from 'axios'

const initialState = {
    data: null,
    loading: null
}
// NOTES
// data = user. {
//     user_id: value,
//     email: value,
//     etc
// }
const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

//type can be REGISTER_USER, LOGIN_USER, or LOGOUT_USER
export default function(state = initialState,action) {
    switch(action.type) {
        case REGISTER_USER + '_PENDING':
            return {
                ...state,
                loading: true
            }
        case REGISTER_USER + '_FULFILLED':
            return {
                ...state,
                data: action.payload.data,
                loading: false
            }
        case REGISTER_USER + '_REJECTED':
            return {
                ...state,
                loading: false
            }
        case LOGIN_USER + '_PENDING':
            return {
                ...state,
                loading: true
            }
        case LOGIN_USER + '_FULFILLED':
            return {
                ...state,
                data: action.payload.data,
                loading: false
            }
        case LOGIN_USER + '_REJECTED':
            return {
                ...state,
                loading: false
            }
        case LOGOUT_USER + '_PENDING':
            return {
                ...state,
                loading: true
            }
        case LOGOUT_USER + '_FULFILLED':
            return {
                ...state,
                data: null,
                loading: false
            }
        case LOGOUT_USER + '_REJECTED':
            return {
                ...state,
                loading: false
            }
        case REQUEST_USER_DATA + '_FULFILLED':
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case REQUEST_USER_DATA + '_PENDING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}
//Action creators. Returns an action object.
export function requestUserData(){
    return {
        type: REQUEST_USER_DATA,
        payload: axios.get('/auth/user-data').then(res => res.data)
    }
}
export function register(user) {
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', user)
    }
}
export function login(user) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', user)
    }
}
export function logout(){
    return {
        type: LOGOUT_USER,
        payload: axios.get('/auth/logout')
    }
}