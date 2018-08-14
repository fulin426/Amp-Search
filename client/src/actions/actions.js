import { SEARCH_JOBS } from './types';
import { NEXT_CATEGORY } from './types';
import { ADD_CATEGORY } from './types';
import { SET_RETURNED_CATEGORIES } from './types';
import { DELETE_CATEGORY } from './types';
import { SET_NOTADDED_CATEGORIES } from './types';
import { DELETE_NOTADDED_CATEGORY } from './types';
import { SET_RESULTS } from './types';


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

export const deleteNotAddedCategory = (category) => dispatch => {
	dispatch({
		type: DELETE_NOTADDED_CATEGORY,
		deleteNotAdded: category
	});
}

export const setResults = (jobs) => dispatch => {
	const sortedJobs = []
	const currentState = jobs[2].category;

	console.log(currentState);
	
	const sortCategory = (currentState) =>{
		let listedSkills = []
		currentState.forEach(item =>
      listedSkills = listedSkills.concat(item._text)
    );
    return listedSkills;
	}

	console.log(sortCategory(currentState));
	
	jobs.forEach(item =>
		sortedJobs.push({ 
			title: item.title._text,
			link: item.link._text,
			location: item.location._text,
			description: item.description._text,
			category: item.category
		}));

	dispatch({
		type: SET_RESULTS,
		setResults: sortedJobs
	});
}
