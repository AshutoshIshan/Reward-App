import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { calculatePoints } from "../constants/rewardRules";

const CustomerCard = styled.div`
    background: #f4f4f4;
    padding:20px;
    margin-bottom:10px;
    border-radius:10px;
`;

const Customer = ({ customer }) => {
    const totalPoints = customer.transactions.reduce((sum, t) => sum + calculatePoints(t.amount), 0);

    return (
        <CustomerCard>
            <h3>Customer ID: {customer.customerId}</h3>
            <p>Total points: {totalPoints}</p>
            <ul>
                {
                    customer.transactions.map((t) => (
                        <li key={t.transactionId}>
                            {t.date} - ${t.amount} - ${calculatePoints(t.amount)} pts
                        </li>
                    ))
                }
            </ul>
        </CustomerCard>
    )
}

Customer.PropTypes = {
    customer: PropTypes.shape({
        customerId: PropTypes.string.isRequired,
        transactions: PropTypes.arrayOf(
            PropTypes.shape({
                transactionId: PropTypes.string.isRequired,
                amount: PropTypes.number.isRequired,
                date: PropTypes.string.isRequired
            })
        )
    }).isRequired
}

export default Customer;