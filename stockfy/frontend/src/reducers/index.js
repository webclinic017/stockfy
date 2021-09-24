import { combineReducers } from "redux";
import transactions from './transactions'

export default combineReducers({
    transactionsReducer: transactions
});