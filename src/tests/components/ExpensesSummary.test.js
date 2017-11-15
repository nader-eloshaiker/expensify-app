import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should render the expenses summary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} ExpensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render the expenses summary correctly with many expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={5} ExpensesTotal={235123} />);
    expect(wrapper).toMatchSnapshot();
});