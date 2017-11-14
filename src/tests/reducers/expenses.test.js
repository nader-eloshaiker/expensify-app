import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set up default expense values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove an exiting expense', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '1'});
    expect(state).toEqual([ expenses[1], expenses[2] ]);
});

test('should not remove an expense that does not exist', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '-1'});
    expect(state).toEqual(expenses);
});

test('should edit an exiting expense', () => {
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: '1', updates: { amount: 295} });
    expect(state[0].amount).toBe(295);
});

test('should not edit an expense that does not exist', () => {
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: '-1', updates: { amount: 295} });
    expect(state).toEqual(expenses);
});

test('should add a new expense', () => {
    const newExpense = {
        id: expect.any(String),
        description: 'New Expense',
        note: 'A note',
        amount: 10,
        createdAt: 0
    };

    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense: newExpense });
    expect(state).toEqual([...expenses, newExpense]);
});
