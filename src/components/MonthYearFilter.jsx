import React from 'react';
import PropTypes from 'prop-types';

const months = [
    { label: 'January', value: '01' },
    { label: 'February', value: '02' },
    { label: 'March', value: '03' },
    { label: 'April', value: '04' },
    { label: 'May', value: '05' },
    { label: 'June', value: '06' },
    { label: 'July', value: '07' },
    { label: 'August', value: '08' },
    { label: 'September', value: '09' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' }
]

const years = [2025, 2024, 2023, 2022, 2021];

const MonthYearFilter = ({ selectedMonth, selectedYear, onChange }) => {
    return (
        <div style={{ marginBottom: '10px' }}>
            <label>Month:</label>
            <select
                value={selectedMonth}
                onChange={(e) => onChange({ month: e.target.value, year: selectedYear })}
            >
                {
                    months.map((m) => (
                        <option value={m.value} key={m.value}>{m.label}</option>
                    ))
                }
            </select>

        </div>
    )
}

MonthYearFilter.propTypes = {
    selectedMonth: PropTypes.string.isRequired,
    selectedYear: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default MonthYearFilter
