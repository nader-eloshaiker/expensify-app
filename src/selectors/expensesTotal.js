const getExpensesTotal = (expenses) => {
    if (!expenses) {
        return 0;
    }

    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
};

export default getExpensesTotal;