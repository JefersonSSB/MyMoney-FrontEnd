import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'


const rootReducer = combineReducers({
    dashboard: () => ({summary:{credit:1200,debt:566}})
})

export default rootReducer

