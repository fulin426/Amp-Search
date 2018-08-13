import { SEARCH_JOBS } from './types';
import { NEXT_CATEGORY } from './types';
import { ADD_CATEGORY } from './types';
import { SET_RETURNED_CATEGORIES } from './types';
import { DELETE_CATEGORY } from './types';
import { SET_NOTADDED_CATEGORIES } from './types';

import Client from "../Client";

export const searchJobs = (query) => dispatch => {
	console.log(`Searching ${query}`);
	Client.search(query)
    .then(jobs => 
    	dispatch ({
      	type: SEARCH_JOBS,
      	payload: jobs
      }));
}

export const nextCategory = () => dispatch => {
	dispatch({
		type: NEXT_CATEGORY
	});
}

export const addCategory = (category) => dispatch => {
	dispatch({
		type: ADD_CATEGORY,
		newCategory: category
	});
}

export const deleteCategory = (category) => dispatch => {
	dispatch({
		type: DELETE_CATEGORY,
		deleteCategory: category
	});
}

export const returnedCategories = (category) => dispatch => {
	dispatch({
		type: SET_RETURNED_CATEGORIES,
		returnedCategories: category
	});
}

export const setNotAddedCategories = (category) => dispatch => {
	dispatch({
		type: SET_NOTADDED_CATEGORIES,
		setNotAdded: category
	});
}