import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as AuthAPI from '../../lib/auth';
import { Map } from 'immutable';


const CHANGE_INPUT = 'auth/CHANGE_INPUT'; 
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'; 
const CHECK_EMAIL_EXISTS = 'auth/CHECK_EMAIL_EXISTS'; 
const CHECK_USERNAME_EXISTS = 'auth/CHECK_USERNAME_EXISTS'; 
const LOCAL_REGISTER = 'auth/LOCAL_REGISTER'; 
const LOCAL_LOGIN = 'auth/LOCAL_LOGIN'; 
const SET_ERROR = 'auth/SET_ERROR';
const LOGOUT = 'auth/LOGOUT'; 


export const changeInput = createAction(CHANGE_INPUT); //  { form, name, value }
export const initializeForm = createAction(INITIALIZE_FORM); // form 
export const checkEmailExists = createAction(CHECK_EMAIL_EXISTS, AuthAPI.checkEmailExists); // email
export const checkUsernameExists = createAction(CHECK_USERNAME_EXISTS, AuthAPI.checkUsernameExists); // username
export const localRegister = createAction(LOCAL_REGISTER, AuthAPI.localRegister); // { email, username, password }
export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin); // { name, password }
export const logout = createAction(LOGOUT, AuthAPI.logout);
export const setError = createAction(SET_ERROR); // { form, message }

const initialState = Map({
    register: Map({
        form: Map({
            email: '',
            username: '',
            password: '',
            passwordConfirm: ''
        }),
        exists: Map({
            email: false,
            password: false
        }),
        error: null
    }),
    login: Map({
        form: Map({
            name: '',
            password: ''
        }),
        error: null
    }),
    result: Map({})
});

// reducer
export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { form, name, value } = action.payload;
        return state.setIn([form, 'form', name], value);
    },
    [INITIALIZE_FORM]: (state, action) => {
        const initialForm = initialState.get(action.payload);
        return state.set(action.payload, initialForm);
    },
    [SET_ERROR]: (state, action) => {
        const { form, message } = action.payload;
        return state.setIn([form, 'error'], message);
    },
    ...pender({
        type: CHECK_EMAIL_EXISTS,
        onSuccess: (state, action) => state.setIn(['register', 'exists', 'email'], action.payload.data.exists)
    }),
    ...pender({
        type: CHECK_USERNAME_EXISTS,
        onSuccess: (state, action) => state.setIn(['register', 'exists', 'username'], action.payload.data.exists)
    }),
    ...pender({
        type: LOCAL_LOGIN,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    }),
    ...pender({
        type: LOCAL_REGISTER,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    })
}, initialState);