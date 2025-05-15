import React from 'react';
import PropTypes from 'prop-types';

const MonthSelector = ({ months, selectedMonth, onSelectMonth }) => (
    <div>
        <label htmlFor="month">Select Month:</label>
        <select
            id="month"
            value={selectedMonth}
            onChange={(e) => onSelectMonth(e.target.value)}
        >
            {
                months.map((month) => (
                    <option key={month} value={month}>{month}</option>
                ))
            }
        </select>
    </div>
)

MonthSelector.propTypes = {
    months: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedMonth: PropTypes.string.isRequired,
    onSelectMonth: PropTypes.func.isRequired
}

export default MonthSelector
