import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, filtersBills } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
    />)
});

test('should render expense list filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters correctly with alternate fixture', () => {
    wrapper.setProps({
        filters: filtersBills
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    wrapper.find('input').simulate('change', {
        target: {value: 'bill'}
    });

    expect(setTextFilter).toHaveBeenLastCalledWith('bill');
});

test('should sort by date', () => {
    wrapper.setProps({
        filters: filtersBills
    });
    wrapper.find('select').simulate('change', {
        target: {value: 'date'}
    });

    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {value: 'amount'}
    });

    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
    const newStateDate = moment(0).add(1, 'days');
    const newEndDate = moment(0).add(5, 'days');
    wrapper.setProps({
        filters: filtersBills
    });
    wrapper.find('DateRangePicker').prop('onDatesChange')( {
        startDate: newStateDate,
        endDate: newEndDate
    });

    expect(setStartDate).toHaveBeenLastCalledWith(newStateDate);
    expect(setEndDate).toHaveBeenLastCalledWith(newEndDate);
});

test('should handle focus change', () => {
    const newValue = 'startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(newValue);
    expect(wrapper.state('calendarFocused')).toBe(newValue);
});
