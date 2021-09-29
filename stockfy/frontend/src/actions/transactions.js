import axios from 'axios';

import { GET_TRANSACTIONS, DELETE_TRANSACTION, ADD_TRANSACTION } from './types';

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
    console.log("delete called");
    axios.delete(`/api/transactions/${id}/`)
    .then(res => {
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
        dispatch({
            type: ADD_TRANSACTION,
            payload: res.data
        });
    }).catch(err => console.log(err));
}