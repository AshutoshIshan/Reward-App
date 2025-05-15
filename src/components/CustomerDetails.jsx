import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { groupTransactionsByMonth } from '../utils/DateHelpers'
import { calculatePoints } from '../constants/rewardRules'
import TransactionList from './TransactionList'
import MonthYearFilter from './MonthYearFilter'

const Wrapper = styled.div`
    background:#fff;
    padding:20px;
    border-radius:8px;
    display: block;
    width: 100%;
`
const getLast3Months = () => {
    const date = new Date();
    const months = [];
    for (let i = 0; i < 3; i++) {
        const d = new Date(date.getFullYear(), date.getMonth() - i, 1);
        months.push({
            month: String(d.getMonth() + 1).padStart(2, '0'),
            year: String(d.getFullYear())
        })
    }
    return months;
}

const CustomerDetails = ({ customer }) => {
    const [filter, setFilter] = useState(() => {
        const last = getLast3Months()[0];
        return { month: last.month, year: last.year }
    })

    const monthlyData = groupTransactionsByMonth(customer.transactions);

    const totalPoints = useMemo(
        () =>
            customer.transactions.reduce(
                (sum, txn) => sum + calculatePoints(txn.amount), 0
            ),
        [customer.transactions]
    );

    const filteredKey = `${filter.year}-${filter.month}`;
    const transactions = monthlyData[filteredKey] || [];

    const monthlySummary = Object.entries(monthlyData).map(([monthKey, txns]) => ({
        monthKey,
        points: txns.reduce((sum, t) => sum + calculatePoints(t.amount), 0)
    }))

    return (
        <Wrapper>
            <h2 className='customer-reward'>Customer ID: {customer.customerId}</h2>
            <p>Total Points: {totalPoints}</p>
            <h3>Monthly Reward Summary</h3>
            <ul>
                {
                    monthlySummary.map(({ monthKey, points }) => (
                        <li key={monthKey}>{monthKey} - {points} points</li>
                    ))
                }
            </ul>
            <MonthYearFilter
                selectedMonth={filter.month}
                selectedYear={filter.year}
                onChange={setFilter}
            />

            <h3>Transactions for {filteredKey}</h3>
            {
                transactions.length === 0 ? (
                    <p>No transaction</p>
                ) : (
                    <TransactionList transactions={transactions} />
                )
            }

        </Wrapper>
    )
}

CustomerDetails.PropTypes = {
    customer: PropTypes.object.isRequired
}

export default CustomerDetails
