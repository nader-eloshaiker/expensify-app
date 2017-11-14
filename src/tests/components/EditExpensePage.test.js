import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


let onEditExpense;
let onRemoveExpense;
let history;
let wrapper;

beforeEach(() => {
    onEditExpense = jest.fn();
    onRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        removeExpense={onRemoveExpense}
        editExpense={onEditExpense}
        history={history}
        id={expenses[1].id}
    />);

});


test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle Edit Expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle remove Expense', () => {
    wrapper.find('button').at(0).simulate('click', {
        target: {value: expenses[1]}
    });

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onRemoveExpense).toHaveBeenLastCalledWith(expenses[1].id);
});