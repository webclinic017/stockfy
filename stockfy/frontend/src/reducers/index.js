import { combineReducers } from "redux";
import transactions from './transactions';
import errors from './errors'
import messages from "./messages";

export default combineReducers({
    transactionsReducer: transactions,
    errorsReducer: errors,
    messagesReducer: messages
});