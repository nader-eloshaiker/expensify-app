import selectExpensesTotal from '../../selectors/expensesTotal'
import expenses from '../fixtures/expenses';

test('should calculate total amount from an array of expenses', () => {
    const result = selectExpensesTotal(expenses);

    expect(result).toBe(199700);
});

test('should calculate total amount from an array of 1 expense', () => {
    const result = selectExpensesTotal([expenses[0]]);

    expect(result).toBe(195);
});

test('should return total amount of 0 from an empty array', () => {
    const result = selectExpensesTotal([]);

    expect(result).toBe(0);
});

test('should return total amount of 0 from an undefined array', () => {
    const result = selectExpensesTotal();

    expect(result).toBe(0);
});