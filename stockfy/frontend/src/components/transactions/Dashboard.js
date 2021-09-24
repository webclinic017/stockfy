import React, {Fragment} from 'react';
import Form from './Form';
import Transactions from './Transactions';

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Transactions />
        </Fragment>
    )
}
