import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';
import numeral from 'numeral';


export const ExpensesSummary = ({expensesCount, expensesTotal}) => (
    <div>
        <p>{expensesCount} {expensesCount === 1 ? 'expense' : 'expenses'} totalling {numeral(expensesTotal/100).format('$0,0.00')}</p>
    </div>
);

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    const expensesCount = expenses ? expenses.length : 0;
    const expensesTotal = selectExpensesTotal(expenses);

    return {
        expensesCount,
        expensesTotal
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
