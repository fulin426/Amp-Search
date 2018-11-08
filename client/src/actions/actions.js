import { SEARCH_JOBS } from './types';
import { ADD_CATEGORY } from './types';
import { SET_RETURNED_CATEGORIES } from './types';
import { DELETE_CATEGORY } from './types';
import { SET_NOTADDED_CATEGORIES } from './types';
import { DELETE_NOTADDED_CATEGORY } from './types';
import { SET_RESULTS } from './types';
import { SHOW_RENDERING } from './types';

import Client from "../Client";

export const searchJobs = (query) => dispatch => {
	console.log(`Searching ${query}`);
	Client.search(query)
    .then(jobs =>
    	dispatch ({
      	type: SEARCH_JOBS,
      	payload: jobs,
				query: query,
      }));
}

export const showRendering = () => dispatch => {
	dispatch({
		type: SHOW_RENDERING
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

export const setResults = (jobs, mySkills) => dispatch => {

	const sortPercentage = (currentState, mySkills) => {
		let listedSkills = [];
		for (let i=0; i<currentState.length; i++) {
			listedSkills = listedSkills.concat(currentState[i]._text);
		}

    let matchedSkills =[];
    listedSkills.forEach(skill => {
  		if(mySkills.indexOf(skill)>=0)	{
   			matchedSkills.push(skill);
  		}
		});
    return Math.round((matchedSkills.length/currentState.length)*100);
	}

	const sortCategory = (currentState) => {
		let listedSkills = [];
		for (let i=0; i<currentState.length; i++) {
			listedSkills = listedSkills.concat(currentState[i]._text);
		}
    return listedSkills.toString().split(',').join(', ');
	}

	const sortedJobs = []

	for (let i=0; i<jobs.length; i++) {
		if (jobs[i].category !== undefined) {
			sortedJobs.push({
				title: jobs[i].title._text,
				link: jobs[i].link._text,
				category: sortCategory(jobs[i].category),
				percentage: sortPercentage(jobs[i].category, mySkills)
			});
		}
	}

	dispatch({
		type: SET_RESULTS,
		setResults: sortedJobs
	});
}
