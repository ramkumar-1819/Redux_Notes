import formReducer from './FormReducer';

import{combineReducers} from 'redux';    //CombineReducer for Combining all Reducers but here We have only one reducer ie(FormReducer)

const rootReducer=combineReducers({
    form:formReducer
})
export default rootReducer;