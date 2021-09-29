import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTransactions, deleteTransaction} from '../../actions/transactions.js';


export class Transactions extends Component {
    static propTypes = {
        transactions: PropTypes.array.isRequired,
        getTransactions: PropTypes.func.isRequired,
        deleteTransaction: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTransactions();
    }
    
    render() {
        return (
            <Fragment>
                <h2>Transaction list</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Stock Quote</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Operation</th>
                            <th>Currency</th>
                            <th>Date of Transaction</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>{transaction.stock_quote}</td>
                                <td>{transaction.price}</td>
                                <td>{transaction.qty}</td>
                                <td>{transaction.operation}</td>
                                <td>{transaction.currency}</td>
                                <td>{transaction.date_transaction}</td>
                                <td><button onClick={this.props.deleteTransaction.bind(this, transaction.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    transactions: state.transactionsReducer.transactions
})

export default connect(mapStateToProps, {getTransactions, deleteTransaction})(Transactions);
