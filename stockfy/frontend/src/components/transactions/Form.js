import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTransaction } from '../../actions/transactions';

export class Form extends Component {
    state = {
        stock_quote: '',
        price: 0,
        qty:0,
        operation: '',
        currency:'',
        date_transaction: ''
    };

    static propTypes = {
        addTransaction: PropTypes.func.isRequired
    };

    onChange = e => {this.setState({[e.target.name]:e.target.value})};

    onSubmit = e => {
        e.preventDefault(); 
        const {stock_quote, price, qty, operation, currency, date_transaction} = this.state;
        const transaction = {stock_quote, price, qty, operation, currency, date_transaction};
        this.props.addTransaction(transaction)
    }; 

    render() {
        const {stock_quote, price, qty, currency, date_transaction, operation} = this.state;
        return (
            <div className='card card-body mt-4 mb-4'>
                <h2>Add Transaction</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Stock Quote</label>
                        <input className='form-control' type='text' name='stock_quote' onChange={this.onChange} value={stock_quote} />
                    </div>
                    <div className='form-group'>
                        <label>Price</label>
                        <input className='form-control' type='number' name='price' onChange={this.onChange} value={price} />
                    </div>
                    <div className='form-group'>
                        <label>Quantity</label>
                        <input className='form-control' type='number' name='qty' onChange={this.onChange} value={qty} />
                    </div>
                    <div className='btn-group' data-toggle="buttons">
                        <label>Operation</label>
                        <input type="radio" className="btn-check" name="operation" value='Buy' id="btnradio1" autoComplete="off" checked={operation === 'Buy'} onChange={this.onChange} />
                        <label className="btn btn-outline-success" htmlFor="btnradio1">Buy</label>
                        <input type="radio" className="btn-check" name="operation" value='Sell' id="btnradio2" autoComplete="off" checked={operation === 'Sell'} onChange={this.onChange}/>
                        <label className="btn btn-outline-danger" htmlFor="btnradio2">Sell</label>
                    </div>
                    <div className='form-group'>
                        <label>Currency</label>
                        <input className='form-control' type='text' name='currency' onChange={this.onChange} value={currency} />
                    </div>
                    <div className='form-group'>
                        <label>Transaction Date</label>
                        <input className='form-control' type='date' name='date_transaction' onChange={this.onChange} value={date_transaction} />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {addTransaction})(Form);
