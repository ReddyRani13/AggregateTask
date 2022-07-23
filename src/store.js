import { createStore} from 'redux';
import formReducer from './Redux/redux';
const store = createStore(formReducer);


export default store;