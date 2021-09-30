import axios from 'axios';
import { createMessage } from './messages';

import { GET_TRANSACTIONS, DELETE_TRANSACTION, ADD_TRANSACTION, GET_ERRORS } from './types';

// get transactions 

export const getTransactions = () => dispatch => {
    axios.get('/api/transactions/')
    .then(res => {
        dispatch({
            type: GET_TRANSACTIONS,
            payload: res.data
        });
    }).catch(err => console.log(err));
}

// delete transaction 

export const deleteTransaction = (id) => dispatch => {
    axios.delete(`/api/transactions/${id}/`)
    .then(res => {
        dispatch(createMessage({deleteTransaction: "Transaction deleted."}));
        dispatch({
            type: DELETE_TRANSACTION,
            payload: id
        });
    }).catch(err => console.log(err));
}

// add transaction 

export const addTransaction = transaction => dispatch => {
    axios.post('/api/transactions/', transaction)
    .then(res => {
        dispatch(createMessage({addTransaction: "Transaction added."}));
        dispatch({
            type: ADD_TRANSACTION,
            payload: res.data
        });
    }).catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        };
        dispatch({
            type: GET_ERRORS,
            payload: errors
        });
        
    });
}