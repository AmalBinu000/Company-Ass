import {createStore} from 'redux'
import cartReducer from '../reducer/cartReducer'
import rootReducer from '../reducer/rootReducer'

const store = createStore(rootReducer)

export default store;