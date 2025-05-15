export const getMonthYear = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
};

export const groupTransactionsByMonth = (transactions) => {
    return transactions.reduce((acc, txn) => {
        const key = getMonthYear(txn.date);
        if (!acc[key]) acc[key] = [];
        acc[key].push(txn)
        return acc;
    }, {})
}