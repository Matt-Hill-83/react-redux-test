import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import CellReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import ActiveCellReducer from './reducer-active-user';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
		users     : UserReducer,
		cells     : CellReducer,
		activeUser: ActiveUserReducer,
		activeCell: ActiveCellReducer,
});

export default allReducers
