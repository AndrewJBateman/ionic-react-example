import { createSelector } from 'reselect';

const getState = (state) => state;

//  General getters
export const fetchRecords = createSelector(getState, (state) => state.records);

//  More specific getters
export const fetchRecord = (recordId) =>
	createSelector(getState, (state) => {
		return state.records.filter((record) => record.id === recordId)[0];
	});