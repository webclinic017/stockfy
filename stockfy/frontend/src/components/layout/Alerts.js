import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
static propTypes = {
    error:PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
}

    componentDidUpdate(prevProps) {
        const {error, alert, message} = this.props;
        if(error !== prevProps.error){
            if (error.msg.stock_quote){
                alert.error(`Stock quote: ${error.msg.stock_quote.join()}`)
            }
            if (error.msg.operation){
                alert.error(`Operation: ${error.msg.operation.join()}`)
            }
            if (error.msg.currency){
                alert.error(`Currency: ${error.msg.currency.join()}`)
            }
            if (error.msg.date_transaction){
                alert.error(`Transaction Date: ${error.msg.date_transaction.join()}`)
            }
        }

        if(message !==  prevProps.message){
            if(message.deleteTransaction){
                alert.success(message.deleteTransaction)
            }
            if(message.addTransaction){
                alert.success(message.addTransaction)
            }
        }
    }
    
    render() {
        return <Fragment/>;
        }
}

const mapStateToProps = state => ({
    error: state.errorsReducer,
    message: state.messagesReducer
})

export default connect(mapStateToProps)(withAlert()(Alerts));
