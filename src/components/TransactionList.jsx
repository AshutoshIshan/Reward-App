import React from 'react';
import PropTypes from 'prop-types';
import { calculatePoints } from '../constants/rewardRules';
const TransactionList = ({ transactions }) => {
    if (!transactions.length) return <p>No Transactions</p>;

    return (
        <ul>
            {
                transactions.map((t) => (
                    <li key={t.transactionId}>
                        {t.date} - ${t.amount} - {calculatePoints(t.amount)} points
                    </li>
                ))
            }
        </ul>
    )
}

TransactionList.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            transactionId: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired
        })
    ).isRequired
}

export default TransactionList
