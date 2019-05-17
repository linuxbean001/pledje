import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const SET_HEADER_TRANSPARENT = 'base/SET_HEADER_TRANSPARENT'; 

export const setHeaderTransparent = createAction(SET_HEADER_TRANSPARENT); // visible

const initialState = Map({
    header: Map({
        transparent: true
    })
});

export default handleActions({
    [SET_HEADER_TRANSPARENT]: (state, action) => state.setIn(['header', 'transparent'], action.payload)
}, initialState);